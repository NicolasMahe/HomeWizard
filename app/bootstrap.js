angular.module('homeWizard', [
  'ngRoute',
  'ngSanitize',
  'ngAnimate',
  'ngTouch',
  'page_home',
  'page_log',
  'page_actuator',
  'page_sensor',
  'directive-responsiveClass'
])
.config(['$routeProvider', function($routeProvider) {
        
    moment.locale('fr');
	
    $routeProvider.
    when('/log', {
            templateUrl: 'app/page/log/template/log.tpl.html',
            controller: 'page_log_LogController'
    }).
    when('/actuator', {
            templateUrl: 'app/page/actuator/template/actuator.tpl.html',
            controller: 'page_actuator_ActuatorController'
    }).
    when('/sensor', {
            templateUrl: 'app/page/sensor/template/sensor.tpl.html',
            controller: 'page_sensor_SensorController'
    }).
    otherwise({
            templateUrl: 'app/page/home/template/home.tpl.html',
            controller: 'page_home_HomeController'
    });
}])
.run(function() {
    FastClick.attach(document.body);
});