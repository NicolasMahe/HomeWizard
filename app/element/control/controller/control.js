angular.module('element_control')

.controller('element_control_ControlController', function ($scope, webservice_actuator) {
    
    $scope.showMore = false;
    
    $scope.actuate = function(action) {
        $scope.$parent.addLoading();
        webservice_actuator.actuate($scope.actuator.id, action.id).then(function(response) {
            $scope.$parent.removeLoading();
            $scope.$parent.getActuatorList();
        });
    };
    
    $scope.openEditActuator = function(actuator) {
        $scope.$parent.openEditActuator(actuator);
    };
    
});