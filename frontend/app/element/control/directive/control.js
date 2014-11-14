angular.module('element_control')

.directive('elementControlControlDirective', function() {
    return {
        restrict: 'E',
        scope: {
            actuator: '=actuator'
        },
        controller: "element_control_ControlController",
        templateUrl: 'frontend/app/element/control/template/control.tpl.html',
        link: function(scope) {
        }
    };
});