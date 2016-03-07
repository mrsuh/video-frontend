var MainController = function ($rootScope, $scope, $sce, MainResource) {
    $rootScope.collapsed = false;

    MainResource.get(function (data) {
        $scope.populars = data.populars;
        $scope.fresh_mu = data.fresh_mu;
        $scope.fresh_an = data.fresh_an;
    });
};
app.controller("MainController", MainController);
MainController.$inject = ['$rootScope', '$scope', '$sce', 'MainResource'];