angular.module('element_sensor')

.controller('element_sensor_StatsController', function ($scope, webservice_sensorStats) {
    
    $scope.loading = 0;
    $scope.sensorStatsArray = null;
    $scope.sensorLiveStats = 0.0;
    $scope.puisanceData = null;
    
    $scope.getLiveStats = function() {
        $scope.loading++;
        
        webservice_sensorStats.aggregator().then(function(response) {
            $scope.sensorLiveStats = response.data.data;
            $scope.loading--;
            
            $scope.getSensorStats();
        });
    };
    
    $scope.getSensorStats = function() {
        $scope.loading++;
        
        webservice_sensorStats.getAll().then(function(response) {
            $scope.sensorStatsArray = response.data.data;
            $scope.loading--;
            
            $scope.puisanceData = [];
            angular.forEach($scope.sensorStatsArray, function(value, key) {
                var d = moment.utc(value.createdAt);
                $scope.puisanceData.push([d.valueOf(), parseFloat(value.puissance)]);
            });
            $scope.initGraph();
        });
    };
    
    $scope.initGraph = function() {
        $('#graphSensorStats').highcharts('StockChart', {
            chart: {
                zoomType: 'x'
            },
            colors: ['#f15c80', '#7cb5ec'], //'#f15c80' '#8085e8'
            rangeSelector: {
                buttons: [{
                    type: 'hour',
                    count: 1,
                    text: '1h'
                }, {
                    type: 'hour',
                    count: 6,
                    text: '6h'
                }, {
                    type: 'hour',
                    count: 12,
                    text: '12h'
                }, {
                    type: 'day',
                    count: 1,
                    text: '1d'
                }, {
                    type: 'day',
                    count: 3,
                    text: '3d'
                }, {
                    type: 'week',
                    count: 1,
                    text: '1w'
                }, {
                    type: 'month',
                    count: 1,
                    text: '1m'
                }, {
                    type: 'month',
                    count: 6,
                    text: '6m'
                }, {
                    type: 'year',
                    count: 1,
                    text: '1y'
                }, {
                    type: 'all',
                    text: 'All'
                }],
                selected: 1
            },
            yAxis: [{
                title: {
                    text: "Speed (kB/s)"
                }
            }, {
                title: {
                    text: "Volume (MB)"
                },
                lineWidth: 1
            }],
            title: {
                text: 'Upload'
            },
            series: [{
                name: 'Speed',
                data: $scope.puisanceData,
                tooltip: {
                    valueDecimals: 2,
                    valueSuffix: 'W'
                },
                dataGrouping: {
                    enabled: true
                },
                zIndex: 100
            }, {
                type: 'column',
                name: 'Volume',
                data: $scope.puisanceData,
                tooltip: {
                    valueDecimals: 2,
                    valueSuffix: 'W'
                },
                yAxis: 1,
                dataGrouping: {
                    enabled: true
                }
            }]

        });
    };
    
    $scope.getLiveStats();
    
});