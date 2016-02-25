var ListMuFullController = function ($rootScope, $scope, $sce, $state, $stateParams, config) {
    $scope.fulls = [];
    for(var i=1; i<= 10; i++){
        $scope.fulls.push(
            {
                poster: '/img/mu.jpg',
                name_ru: 'Футурама',
                name_en: 'Futurama'
            }
        );
    }
};
app.controller("ListMuFullController", ListMuFullController);
ListMuFullController.$inject = ['$rootScope', '$scope', '$sce', '$state', '$stateParams', 'config'];