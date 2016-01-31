var scroll =  function ($window) {
    return function(scope, element, attrs) {
        angular.element($window).bind("scroll", function() {
            if (this.pageYOffset >= attrs.scroll) {
                scope.changeScrollClass = true;
            } else {
                scope.changeScrollClass = false;
            }
            scope.$apply();
        });
    };
};
app.directive("scroll", scroll);
scroll.$inject = ['$window'];