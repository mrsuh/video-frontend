var MainController = function ($rootScope, $scope, $sce, $state, $stateParams, config) {

    $scope.populars = [
        {},
        {},
        {},
        {},
        {}
    ];

    $scope.fresh_mu = [
        {},
        {},
        {}
    ];

    $scope.fresh_an = [
        {},
        {},
        {}
    ];

};
app.controller("MainController", MainController);
MainController.$inject = ['$rootScope', '$scope', '$sce', '$state', '$stateParams', 'config'];