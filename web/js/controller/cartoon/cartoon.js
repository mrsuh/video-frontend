var CartoonController = function ($rootScope, $scope, $sce, $state, $stateParams, config) {
    $rootScope.collapsed = true;

    var initPlaylist = function()
    {
        $stateParams.cartoon;
        $stateParams.type;
        $stateParams.episode;
        $stateParams.season;

        $scope.video = {
            //url: 'http://core.dev.cdnnow.ru/manifest.mpd'
        };
    };
    $scope.series = [];
    for(var i = 1; i <=10; i++){
        $scope.series.push({
            poster: 'img',
            cartoon: 'futurama',
            season: 1,
            episode: i
        });
    }

    initPlaylist();
};
app.controller("CartoonController", CartoonController);
CartoonController.$inject = ['$rootScope', '$scope', '$sce', '$state', '$stateParams', 'config'];