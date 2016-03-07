var ListMuStudioController = function ($rootScope, $scope, $sce, $state, $stateParams, config, ListResource) {
    ListResource.get(config.CONSTANT.KIND.CARTOON.MULT, config.CONSTANT.TYPE.CARTOON.STUDIO, function (data) {
        $scope.studios = data;
    });
};
app.controller("ListMuStudioController", ListMuStudioController);
ListMuStudioController.$inject = ['$rootScope', '$scope', '$sce', '$state', '$stateParams', 'config', 'ListResource'];