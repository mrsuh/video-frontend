var FilmController = function ($rootScope, $scope, $sce, $state, $stateParams, config, $document) {

    $scope.list = {};
    $scope.seasons = [];
    $scope.full_lengths = [];
    $scope.current_season = 1;

    for(var s = 1; s <= 10; s++){
        $scope.seasons.push(s);

        var season = [];
        for(var i=1; i<20; i++){
            season.push({
                film: 'Star track s' + s + 'e' + i,
                poster: $sce.trustAsResourceUrl('img/img.jpg'),
                src: $sce.trustAsResourceUrl('video/meg.mp4')
            });
        }

        $scope.list[s] = season;
    }

    $scope.video = {
        name: 'name',
        src: $sce.trustAsResourceUrl('video/fem.mp4'),
        poster: $sce.trustAsResourceUrl('img/img.jpg')
    };


    $scope.changeVideo = function(obj)
    {

        var video = angular.element(document.querySelector('#video'));

        $scope.video.src = obj.src;
        //video.src = obj.src;
        //video.play();
    };

    $scope.changeShow = function(str)
    {
        if('undefined' === typeof $scope.show){
            $scope.show = {};
        }
        ['description', 'series', 'full_length'].forEach(function(val, key){
            $scope.show[val] = false;
        });
        $scope.show[str] = true;
    }
};

app.controller("FilmController", FilmController);
FilmController.$inject = ['$rootScope', '$scope', '$sce', '$state', '$stateParams', 'config', '$document'];