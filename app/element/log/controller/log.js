angular.module('element_log')

.controller('element_log_LogController', ['$scope', 'webservice_log', function ($scope, webservice_log) {

    $scope.loading = 0;

    $scope.getLog = function()
    {
        $scope.loading++;
        
        webservice_log.getAll().then(function(response) {
            $scope.logArray = response.data.data;
            if($scope.logArray) {
                $scope.logArray = $scope.logArray.reverse();
            }
            $scope.loading--;
        });
    };
    
    $scope.reset = function() {
        if (confirm("Confirmer réinitialisation des logs ?") === true) {
            $scope.loading++;
            webservice_log.reset().then(function(response) {
                $scope.loading--;
                $scope.getLog();
            });
        }
    }

    $scope.getLog();
	
}]);