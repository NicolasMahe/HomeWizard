angular.module('element_control')

.directive('elementControlListDirective', function() {
    return {
        restrict: 'E',
        scope: {
        },
        controller: "element_control_ListController",
        templateUrl: 'app/element/control/template/list.tpl.html',
        link: function(scope) {
        }
    };
});