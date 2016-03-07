var CartoonController = function ($rootScope, $scope, $sce, $state, $stateParams, config) {
    $rootScope.collapsed = true;

    var initPlaylist = function () {
        $stateParams.cartoon;
        $stateParams.type;
        $stateParams.episode;
        $stateParams.season;

        $scope.video = {
            url: 'http://core.dev.cdnnow.ru/manifest.mpd',
            poster: '/img/mu.jpg'
        };
    };

    var series = [];
    for (var i = 1; i <= 10; i++) {
        series.push({
            poster: 'img',
            cartoon: 'futurama',
            season: 1,
            episode: i
        });
    }

    $scope.seasons = [];
    for(var s = 1; s<=10; s++){
        $scope.seasons.push({
            id: s,
            series: series
        })
    }

    $scope.populars = [];
    for (var i = 1; i <= 6; i++) {
        $scope.populars.push({
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