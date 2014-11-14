angular.module('element_layout')

.directive('elementLayoutHeaderDirective', function() {
	return {
		restrict: 'E',
		templateUrl: 'frontend/app/element/layout/template/header.tpl.html',
        link: function(scope) {
            $('.screen-xs .navbar-nav li a, .screen-xs a.navbar-brand').click(function() {
                $('.navbar-collapse').collapse('hide');
            });
        }
	};
});