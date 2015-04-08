angular.module('myApp', [])
.directive('elementDirective', function ($log) {
    return {
        restrict: 'E',
        //replace: true,
        template: '<p>Ze template!</p>',
        link: function (scope, el, attrs) {
            $log.log(el.html());
            // Ze template!
            $log.log(attrs.someAttr);
            // myvalue
        }
    };
});