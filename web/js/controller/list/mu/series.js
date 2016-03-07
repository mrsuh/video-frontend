var ListMuSeriesController = function ($rootScope, $scope, $sce, $state, $stateParams, config) {
    $scope.series = [
        {
            poster: '/img/mu.jpg',
            name_ru: 'Время приключений',
            name_en: 'Adventure time',
            cartoon: 'adventure-time',
            type: config.CONSTANT.TYPE.CARTOON.SERIAL.NAME
        },
        {
            poster: '/img/mu.jpg',
            name_ru: 'Футурама',
            name_en: 'Futurama',
            cartoon: 'futurama',
            type: config.CONSTANT.TYPE.CARTOON.SERIAL.NAME
        }
    ];
};
app.controller("ListMuSeriesController", ListMuSeriesController);
ListMuSeriesController.$inject = ['$rootScope', '$scope', '$sce', '$state', '$stateParams', 'config'];