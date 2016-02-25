var ListAnSeriesController = function ($rootScope, $scope, $sce, $state, $stateParams, config) {
    $scope.series = [];
    for(var i=1; i<= 10; i++){
        $scope.series.push(
            {
                poster: '/img/mu.jpg',
                name_ru: 'Наруто',
                name_en: 'Naruto'
            }
        );
    }
};
app.controller("ListAnSeriesController", ListAnSeriesController);
ListAnSeriesController.$inject = ['$rootScope', '$scope', '$sce', '$state', '$stateParams', 'config'];