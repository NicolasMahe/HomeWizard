angular.module('element_layout')

.directive('elementLayoutSubHeaderDirective', function() {
	return {
		restrict: 'E',
		templateUrl: 'app/element/layout/template/subHeader.tpl.html',
        link: function() {
            /*$(document).scroll( function() {
                var value = $(this).scrollTop();

                if ( value > 100 ){
                    console.log("scroll down");
                    $("#subHeader").css('zoom', 0.5);
                }
                else {
                   //console.log("scroll up");
                   //$("#subHeader").css('zoom', 1);
                }
            });*/
        }
	};
});