<?php

class ActuatorcrudController extends CrudControllerModel
{
    function __construct()
    {
        parent::__construct("actuator", true);
    }
}