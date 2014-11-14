angular.module('element_sensor')

.directive('elementSensorStatsDirective', function() {
    return {
        restrict: 'E',
        scope: {
        },
        controller: "element_sensor_StatsController",
        templateUrl: 'frontend/app/element/sensor/template/stats.tpl.html',
        link: function(scope) {
        }
    };
});