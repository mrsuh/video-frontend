var HeaderController = function ($rootScope, $scope, $state, $stateParams, config) {

    $scope.scrollfixed = function(elem) {
        console.info(elem);
    }

};

app.controller("HeaderController", HeaderController);
HeaderController.$inject = ['$rootScope', '$scope', '$state', '$stateParams', 'config'];s