<?php

class Actuator
{
    public function activate($id, $actionId)
    {
        $actuator = new Table("actuator");
        
        $data = $actuator->get($id);
        $action = $this->_getFromId($data['action'], $actionId);
        
        if($action)
        {
            //deactivate
            $deactivate = "";
            if($action['deactive'] && count($action['deactive']) > 0) {
                $deactivate = "&deactivate=";
                foreach($action['deactive'] as $numero => $value) {
                    if($value == true) {
                        $deactivate .= $numero.",";
                    }
                }
                $deactivate = trim($deactivate, ",");
            }
            //activate
            $activate = "";
            if($action['active'] && count($action['active']) > 0) {
                $activate = "&actuate=";
                foreach($action['active'] as $numero => $value) {
                    if($value == true) {
                        $activate .= $numero.",";
                    }
                }
                $activate = trim($activate, ",");
            }
            
            //url constructor
            $url = trim($data['url'], "/")."/?apikey=".$data['key']."&duration=".$action['duration'].$activate.$deactivate;

            $content = HTTP::get($url, null, true);
            
            if($content['status'] == "success")
            {
                Log::add("Actuator", "Activate", "success", "Actuator '".$data['name']."' action '".$action['name']."' successfully activated");
                
                //update
                $data['_lastActuated'] = date("Y-m-d\TH:i:s\Z");
                $data['_status'] = $action['status'];
                $data['_color'] = $action['color'];
                $actuator->update($data);
                
                return true;
            }
            else
            {
                Log::add("Actuator", "Activate", "error", "Actuator '".$data['name']."' action '".$action['name']."' error during activation. Error: ".$content['error']);
                Error::add("Actuator '".$data['name']."' action '".$action['name']."' error during activation. Error: ".$content['error']);
                
                return false;
            }
        }
        
        Error::add("Actuator '".$data['name']."' action id '".$actionId."' is unknown");
        return false;
    }
    
    protected function _getFromId($data, $id)
    {
        foreach ($data as $d)
        {
            if($d['id'] == $id)
            {
                return $d;
            }
        }
        
        return null;
    }
}
