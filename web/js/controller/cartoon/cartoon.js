var CartoonController = function ($rootScope, $scope, $sce, $state, $stateParams, config, CartoonResource) {
    $rootScope.collapsed = true;

    $scope.current = {};
    CartoonResource.get($stateParams.cartoon, function (data) {
        $scope.cartoon = data;
        $scope.current.season = $scope.cartoon.seasons[0];
    });

    CartoonResource.getPlaylist($stateParams.cartoon, $stateParams.type, $stateParams.season, $stateParams.episode, function (data) {
        $scope.video = data;
        console.info(data);
    });

    $scope.populars = [];
    for (var i = 1; i <= 6; i++) {
        $scope.populars.push({
            poster: 'img',
            cartoon: 'futurama',
            season: 1,
            episode: i
        });
    }
};
app.controller("CartoonController", CartoonController);
CartoonController.$inject = ['$rootScope', '$scope', '$sce', '$state', '$stateParams', 'config', 'CartoonResource'];