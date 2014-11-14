angular.module('element_layout')

.controller('element_layout_HeaderController', ['$scope', '$http', '$location', function ($scope, $http, $location) {

	$scope.checkFirstPath = function(path)
	{
		return ($location.path() == path);
	}
	
}]);