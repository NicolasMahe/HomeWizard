angular.module('element_log')

.directive('elementLogLogDirective', function() {
    return {
        restrict: 'E',
        scope: {
        },
        controller: "element_log_LogController",
        templateUrl: 'frontend/app/element/log/template/log.tpl.html',
        link: function(scope) {
            
        }
    };
});