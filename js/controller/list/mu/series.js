var ListMuSeriesController = function ($rootScope, $scope, $sce, $state, $stateParams, config) {
    $scope.series = [];
    for(var i=1; i<= 10; i++){
        $scope.series.push(
            {
                poster: '/img/mu.jpg',
                name_ru: 'Время приключений',
                name_en: 'Adventure time'
            }
        );
    }
};
app.controller("ListMuSeriesController", ListMuSeriesController);
ListMuSeriesController.$inject = ['$rootScope', '$scope', '$sce', '$state', '$stateParams', 'config'];