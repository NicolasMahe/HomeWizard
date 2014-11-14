<?php

class ActuatorController
{
    public function activate()
    {
        $actuatorId = Request::get('actuatorId');
        $actionId = Request::get('actionId');
        
        if(!empty($actuatorId) && !empty($actionId)) {
            $actuator = new Actuator();
            $data = $actuator->activate($actuatorId, $actionId);
            
            if($data)
            {
                Response::setStatus('success');
            }
            else
            {
                Response::setStatus('error');
            }

            //Response::setData($data);
        } else {
            Error::add('actuatorId and/or actionId are empty');
            Response::setStatus('error');
        }
    }
}
