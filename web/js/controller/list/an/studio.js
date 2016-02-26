var ListAnStudioController = function ($rootScope, $scope, $sce, $state, $stateParams, config) {
    $scope.studios = [];
    for(var i=1; i<= 10; i++){
        $scope.studios.push(
            {
                poster: '/img/mu.jpg',
                name: 'Ghibli'
            }
        );
    }
};
app.controller("ListAnStudioController", ListAnStudioController);
ListAnStudioController.$inject = ['$rootScope', '$scope', '$sce', '$state', '$stateParams', 'config'];