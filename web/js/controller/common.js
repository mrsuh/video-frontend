var CommonController = function ($rootScope, $scope, config) {
    $rootScope.collapsed = false;
    $scope.menu = {
        sub_1: false,
        sub_2: false
    };

    $rootScope.CONSTANT = config.CONSTANT;

    $scope.closeMenu = function () {
        for (var index in $scope.menu) {
            if (!$scope.menu.hasOwnProperty(index)) {
                continue;
            }
            $scope.menu[index] = false;
        }
    };

    $scope.changeMenu = function (sub_menu) {
        $scope.closeMenu();
        $scope.menu[sub_menu] = true;
    };
};

app.controller("CommonController", CommonController);
CommonController.$inject = ['$rootScope', '$scope', 'config'];