angular.module('webservice_actuator', [])

.factory('webservice_actuator', ['$http', function($http) {
    return {
    	getAll: function() {
	    	return $http.get('backend/?page=actuatorcrud&action=get');
    	},
    	get: function(id) {
	    	return $http.get('backend/?page=actuatorcrud&action=get&id='+id);
    	},
    	add: function(actuator) {
            var data = {'data': actuator};
	    	return $http.post('backend/?page=actuatorcrud&action=add', data);
    	},
    	update: function(actuator) {
            var data = {'data': actuator};
	    	return $http.post('backend/?page=actuatorcrud&action=update', data);
    	},
    	delete: function(id) {
	    	return $http.get('backend/?page=actuatorcrud&action=delete&id='+id);
    	},
        actuate: function(actuatorId, actionId) {
	    	return $http.get('backend/?page=actuator&action=activate&actuatorId='+actuatorId+'&actionId='+actionId);
        }
    };
}]);