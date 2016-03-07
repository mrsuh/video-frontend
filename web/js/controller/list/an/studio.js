var ListAnStudioController = function ($rootScope, $scope, $sce, $state, $stateParams, config, ListResource) {
    ListResource.get(config.CONSTANT.KIND.CARTOON.ANIM, config.CONSTANT.TYPE.CARTOON.STUDIO, function(data){
        $scope.studios = data;
    });
};
app.controller("ListAnStudioController", ListAnStudioController);
ListAnStudioController.$inject = ['$rootScope', '$scope', '$sce', '$state', '$stateParams', 'config', 'ListResource'];