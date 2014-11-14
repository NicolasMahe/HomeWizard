angular.module('element_control')

.controller('element_control_ListController', function ($scope, webservice_actuator) {
    
    $scope.showRight = false;
    $scope.isScreenXs = false;
    
    $scope.loading = 0;
    $scope.actuatorCurrent = null;

    $scope.getActuatorList = function() {
        $scope.addLoading();
        
        webservice_actuator.getAll().then(function(response) {
            $scope.actuatorArray = response.data.data;
            $scope.removeLoading();
            
            angular.forEach($scope.actuatorArray, function(actuator, key) {
                if(actuator._lastActuated) {
                    actuator._relativeDate = moment(actuator._lastActuated).fromNow();
                } else {
                    actuator._relativeDate = "Jamais actionné";
                }
                
                if($scope.actuatorCurrent && $scope.actuatorCurrent.id === actuator.id) {
                    $scope.actuatorCurrent = actuator;
                }
            });
            
            if($scope.actuatorArray.length > 0 && !$scope.actuatorCurrent) {
                $scope.actuatorCurrent = $scope.actuatorArray[0];
            }
        });
    };
    
    $scope.addLoading = function() {
        $scope.loading++;
    };
    $scope.removeLoading = function() {
        $scope.loading--;
    };
    
    $scope.setCurrentActuator = function(actuator) {
        $scope.actuatorCurrent = actuator;
    };
    
    $scope.openAddActuator = function() {
        $scope.actuatorToEdit = null;
        $('#element-modal-control').modal('show');
    };
    $scope.openEditActuator = function(actuator) {
        $scope.actuatorToEdit = angular.copy(actuator);
        $('#element-modal-control').modal('show');
    };

    $scope.getActuatorList();
    
    
    //responsive
    $scope.initResponsive = function() {
        if($('body').hasClass('screen-xs')) {
            $scope.isScreenXs = true;
        }
    };
    
    $scope.initResponsive();
});