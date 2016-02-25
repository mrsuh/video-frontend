var ListAnFullController = function ($rootScope, $scope, $sce, $state, $stateParams, config) {
    $scope.fulls = [];
    for(var i=1; i<= 10; i++){
        $scope.fulls.push(
            {
                poster: '/img/mu.jpg',
                name_ru: 'Наруто',
                name_en: 'Naruto'
            }
        );
    }
};
app.controller("ListAnFullController", ListAnFullController);
ListAnFullController.$inject = ['$rootScope', '$scope', '$sce', '$state', '$stateParams', 'config'];