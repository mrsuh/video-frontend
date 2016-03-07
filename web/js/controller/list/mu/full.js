var ListMuFullController = function ($rootScope, $scope, $sce, $state, $stateParams, config, ListResource) {
    ListResource.get(config.CONSTANT.KIND.CARTOON.MULT, config.CONSTANT.TYPE.CARTOON.FULL, function (data) {
        $scope.fulls = data;
    });
};
app.controller("ListMuFullController", ListMuFullController);
ListMuFullController.$inject = ['$rootScope', '$scope', '$sce', '$state', '$stateParams', 'config', 'ListResource'];