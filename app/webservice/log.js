angular.module('webservice_log', [])

.factory('webservice_log', ['$http', function($http) {
    return {
    	getAll: function() {
	    	return $http.get('backend/?page=log&action=getAll');
    	},
    	reset: function() {
	    	return $http.get('backend/?page=log&action=reset');
    	}
    };
}]);