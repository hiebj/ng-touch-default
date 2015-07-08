(function() {
    'use strict';
    angular
        .module('touchDefault', [])
        .directive('touchDefault', TouchDefault);

    function TouchDefault() {
        function link($scope, $element, $attrs) {
            $element.on('focus', function() {
                if (!$element.val()) {
                    $element.val(defaultValue());
                }
            });
            if (typeof $attrs.clearDefault !== 'undefined') {
                $element.on('blur', function() {
                    if ($element.val() === defaultValue()) {
                        $element.val('');
                    }
                });
            }
            function defaultValue() {
                return $attrs.touchDefault ? $scope.$eval($attrs.touchDefault) : $attrs.placeholder;
            }
        }
        return {
            restrict: 'A',
            link: link
        };
    }
})();
