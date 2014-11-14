<?php

//PHP errors
error_reporting(E_ALL);
ini_set('display_errors', 1);

//library
include("library/Actuator.php");

//NM PHP Libraries
include("library/NM-PHP-Libraries/Table.php");
include("library/NM-PHP-Libraries/CrudControllerModel.php");
include("library/NM-PHP-Libraries/Log.php");
include("library/NM-PHP-Libraries/Response.php");
include("library/NM-PHP-Libraries/Error.php");
include("library/NM-PHP-Libraries/Config.php");
include("library/NM-PHP-Libraries/Request.php");
include("library/NM-PHP-Libraries/Storage.php");
include("library/NM-PHP-Libraries/HTTP.php");


$page = ucfirst(strtolower(Request::get('page')));
$action = strtolower(Request::get('action'));

if(!empty($page) && !empty($action))
{
	$controllerPath = Config::get('controllerPath').'/'.$page.'.php';
	
	$fileExist = file_exists($controllerPath);
	if($fileExist)
	{
		include($controllerPath);
		$controllerName = $page.'Controller';
		$controller = new $controllerName();
		
		$methodExists = method_exists($controller, $action);
		if($methodExists)
		{
			$controller->$action();
		}
		else
		{
			Error::add('action "'.$action.'" is unknown');
		}
	}
	else
	{
		Error::add('page "'.$page.'" is unknown');
	}
}
else
{
	Error::add('page and/or action are not set');
}

//send response
Response::send();

//write log
Log::write();