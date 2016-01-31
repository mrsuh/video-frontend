var MainController = function ($rootScope, $scope, $state, $stateParams, config) {

    $scope.name = 'WORLD!';

};

app.controller("MainController", MainController);
MainController.$inject = ['$rootScope', '$scope', '$state', '$stateParams', 'config'];