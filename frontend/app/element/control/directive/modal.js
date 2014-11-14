angular.module('element_control')

.directive('elementModalControlDirective', function() {
    return {
        restrict: 'E',
        scope: {
            actuator: '=actuator'
        },
        controller: "element_control_ModalController",
        templateUrl: 'frontend/app/element/control/template/modal.tpl.html',
        link: function(scope) {
        }
    };
});