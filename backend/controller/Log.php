<?php

class LogController
{
	public function getall()
	{
		$data = Log::getAll();
		
		if(!empty($data))
		{
			Response::setData($data);
			Response::setStatus('success');
		}
		else
		{
			Response::setStatus('error');
		}
	}
	public function reset()
	{
		$data = Log::reset();
		
        Response::setStatus('success');
	}
}