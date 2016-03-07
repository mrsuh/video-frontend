var scroll = function ($window) {
    return function (scope, element, attrs) {
        angular.element($window).bind("scroll", function () {
            if (this.pageYOffset >= attrs.scroll) {
                scope.scroll = true;
            } else {
                scope.scroll = false;
            }
            scope.$apply();
        });
    };
};
app.directive("scroll", scroll);
scroll.$inject = ['$window'];