var ErrorController = function ($rootScope, $scope, $state, $stateParams, config) {

    $scope.name = 'ERROR!';

};

app.controller("ErrorController", ErrorController);
ErrorController.$inject = ['$rootScope', '$scope', '$state', '$stateParams', 'config'];