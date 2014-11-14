angular.module('webservice_sensor', [])

.factory('webservice_sensor', ['$http', function($http) {
    return {
    	getAll: function() {
            return $http.get('backend/?page=sensor&action=get');
    	},
    	get: function(id) {
            return $http.get('backend/?page=sensor&action=get&id='+id);
    	},
    	add: function(actuator) {
            var data = {'data': actuator};
            return $http.post('backend/?page=sensor&action=add', data);
    	},
    	update: function(actuator) {
            var data = {'data': actuator};
            return $http.post('backend/?page=sensor&action=update', data);
    	},
    	delete: function(id) {
            return $http.get('backend/?page=sensor&action=delete&id='+id);
    	}
    };
}]);