var ListController = function ($rootScope, $scope, $sce, $state, $stateParams, config) {

    var single = {
            film: 'Star track',
            poster: $sce.trustAsResourceUrl('img/img.jpg')
        };

    $scope.list = [];
    for(var i=1; i<20; i++){
        $scope.list.push(single);
    }

};

app.controller("ListController", ListController);
ListController.$inject = ['$rootScope', '$scope', '$sce', '$state', '$stateParams', 'config'];