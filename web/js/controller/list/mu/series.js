var ListMuSeriesController = function ($rootScope, $scope, $sce, $state, $stateParams, config, ListResource) {
    ListResource.get(config.CONSTANT.KIND.CARTOON.MULT, config.CONSTANT.TYPE.CARTOON.SERIES, function (data) {
        $scope.series = data;
    });
};
app.controller("ListMuSeriesController", ListMuSeriesController);
ListMuSeriesController.$inject = ['$rootScope', '$scope', '$sce', '$state', '$stateParams', 'config', 'ListResource'];