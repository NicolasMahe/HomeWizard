
angular.module('directive-responsiveClass', [])
.directive('directiveResponsiveClass', function() {
    return {
        restrict: 'A',
        link: function(scope, element, attrs) {
            
            var checkSize = function() {
                element.removeClass('screen-xs screen-sm screen-md screen-lg');
                
                var widthScreen = $(window).width();
            
                if(widthScreen < 768) {
                    element.addClass('screen-xs');
                } else if(widthScreen < 992) {
                    element.addClass('screen-sm');
                } else if(widthScreen < 1200) {
                    element.addClass('screen-md');
                } else {
                    element.addClass('screen-lg');
                }
            };
            
            checkSize();
            
            $(window).resize(function(){
                checkSize();
            });
        }
    };
}).directive('directiveResponsiveShowOnly', function(ngIfDirective) {
    //@TODO faire marcher le ng if lors de window resize
    var ngIf = ngIfDirective[0];

    return {
        transclude: ngIf.transclude,
        priority: ngIf.priority,
        terminal: ngIf.terminal,
        restrict: 'A',
        link: function($scope, $element, $attr) {
            var argumentsBis = arguments;
            var checkSize = function() {
                var value = $attr['directiveResponsiveShowOnly'];

                var yourCustomValue = false;//$scope.$eval(value);
                if($('body').hasClass(value)) {
                    yourCustomValue = true;
                }
                $attr.ngIf = function() {
                    return yourCustomValue;
                };
                ngIf.link.apply(ngIf, argumentsBis);
            };
            
            checkSize();
            
            $(window).resize(function() {
                checkSize();
            });
        }
    };
}).directive('directiveResponsiveShowNot', function(ngIfDirective) {
    //@TODO faire marcher le ng if lors de window resize
    var ngIf = ngIfDirective[0];

    return {
        transclude: ngIf.transclude,
        priority: ngIf.priority,
        terminal: ngIf.terminal,
        restrict: 'A',
        link: function($scope, $element, $attr) {
            var argumentsBis = arguments;
            var checkSize = function() {
                var value = $attr['directiveResponsiveShowNot'];

                var yourCustomValue = true;//$scope.$eval(value);
                if($('body').hasClass(value)) {
                    yourCustomValue = false;
                }
                $attr.ngIf = function() {
                    return yourCustomValue;
                };
                ngIf.link.apply(ngIf, argumentsBis);
            };
            
            checkSize();
            
            $(window).resize(function() {
                checkSize();
            });
        }
    };
});