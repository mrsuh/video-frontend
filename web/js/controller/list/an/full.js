var ListAnFullController = function ($rootScope, $scope, $sce, $state, $stateParams, config, ListResource) {
    ListResource.get(config.CONSTANT.KIND.CARTOON.ANIM, config.CONSTANT.TYPE.CARTOON.FULL, function(data){
        $scope.fulls = data;
    });
};
app.controller("ListAnFullController", ListAnFullController);
ListAnFullController.$inject = ['$rootScope', '$scope', '$sce', '$state', '$stateParams', 'config', 'ListResource'];