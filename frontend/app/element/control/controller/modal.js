angular.module('element_control')

.controller('element_control_ModalController', function ($scope, webservice_actuator) {
    
    $scope.init = function() {
        if(!$scope.actuator) {
            $scope.actuator = {
                "url": "http://192.168.0.",
                "action": [
                    {
                        "id": 1,
                        "duration": 1000,
                        "color": "primary"
                    }
                ]
            };
            $scope.actionNextId = 1;
        } else {
            $scope.actionNextId = 1;
            angular.forEach($scope.actuator.action, function(action, key) {
                if(action.id >= $scope.actionNextId) {
                    $scope.actionNextId = action.id + 1;
                }
            });
        }
    };

    $scope.$watch(
        function() { return $scope.actuator; },
        function(newValue, oldValue) {
            $scope.init();
        }
    );
    
    $scope.addAction = function() {
        $scope.actuator.action.push({
            "id": $scope.actionNextId,
            "duration": 1000
        });
        $scope.actionNextId++;
    };
    
    $scope.removeAction = function(action) {
        var index = $scope.actuator.action.indexOf(action);
        if (index > -1) {
            $scope.actuator.action.splice(index, 1);
        }
    };
    
    $scope.save = function() {
        $scope.$parent.addLoading();
        
        /*angular.forEach($scope.actuator, function(value, key) {
            if(key.charAt(0) == "_") {
                delete $scope.actuator[key];
            }
        });
        
        console.log($scope.actuator);*/
        
        if($scope.actuator.id) {
            webservice_actuator.update($scope.actuator).then(function(response) {
                $scope.$parent.removeLoading();
                $scope.$parent.getActuatorList();
                
                $('#element-modal-control').modal('hide');
            });
        } else {
            webservice_actuator.add($scope.actuator).then(function(response) {
                $scope.$parent.removeLoading();
                $scope.$parent.getActuatorList();
                
                $('#element-modal-control').modal('hide');
            });
        }
    };
    
    $scope.delete = function() {
        if (confirm("Confirmer suppression de "+$scope.actuator.name+" ?") === true) {
            $scope.$parent.addLoading();
            webservice_actuator.delete($scope.actuator.id).then(function(response) {
                $scope.$parent.removeLoading();
                $scope.$parent.setCurrentActuator(null);
                $scope.$parent.getActuatorList();

                $('#element-modal-control').modal('hide');
            });
        }
    };
    
    $scope.init();
    
});