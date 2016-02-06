var MainController = function ($rootScope, $scope, $sce, $state, $stateParams, config) {
$scope.video = false;

    var single = {
        name: 'Something something',
        film: 'Star track',
        id_film: 'star_track',
        id_season: 's1e1',
        season: 'Сезон 1 Серия 1',
        poster: $sce.trustAsResourceUrl('img/img.jpg')
    };

    $scope.list_fresh =[];
    for(var i=0; i<8; i++){
        $scope.list_fresh.push(single);
    }

    $scope.video = {
        name: 'name',
        src: $sce.trustAsResourceUrl('video/fem.mp4'),
        poster: $sce.trustAsResourceUrl('img/img.jpg')
    };

};

app.controller("MainController", MainController);
MainController.$inject = ['$rootScope', '$scope', '$sce', '$state', '$stateParams', 'config'];