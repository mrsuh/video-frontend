var ListAnSeriesController = function ($rootScope, $scope, $sce, $state, $stateParams, config, ListResource) {
    ListResource.get(config.CONSTANT.KIND.CARTOON.ANIM, config.CONSTANT.TYPE.CARTOON.SERIES, function (data) {
        $scope.series = data;
    });
};
app.controller("ListAnSeriesController", ListAnSeriesController);
ListAnSeriesController.$inject = ['$rootScope', '$scope', '$sce', '$state', '$stateParams', 'config', 'ListResource'];