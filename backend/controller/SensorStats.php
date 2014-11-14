<?php

class SensorstatsController extends CrudController
{
    function __construct()
    {
        parent::__construct("sensorStats", false);
    }
    
    public function aggregator()
    {
        $url = "http://192.168.1.200/sensor";
        $data = HTTP::get($url, null, true);
        if($data['status'] == "success") {
            $this->storage->add(array(
                "puissance" => $data['data']
            ));
            Response::setStatus('success');
            
            return;
        }
        
        Response::setStatus('error');
    }
}