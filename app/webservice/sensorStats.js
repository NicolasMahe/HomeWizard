angular.module('webservice_sensorStats', [])

.factory('webservice_sensorStats', ['$http', function($http) {
    return {
    	getAll: function() {
            return $http.get('backend/?page=sensorstats&action=get');
    	},
    	get: function(id) {
            return $http.get('backend/?page=sensorstats&action=get&id='+id);
    	},
    	add: function(actuator) {
            var data = {'data': actuator};
            return $http.post('backend/?page=sensorstats&action=add', data);
    	},
    	update: function(actuator) {
            var data = {'data': actuator};
            return $http.post('backend/?page=sensorstats&action=update', data);
    	},
    	delete: function(id) {
            return $http.get('backend/?page=sensorstats&action=delete&id='+id);
    	},
        aggregator: function() {
            return $http.get('backend/?page=sensorstats&action=aggregator');
        }
    };
}]);