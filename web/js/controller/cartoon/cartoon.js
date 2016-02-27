var CartoonController = function ($rootScope, $scope, $sce, $state, $stateParams, config) {
    $rootScope.collapsed = true;

    $scope.player = {
        link: '/var/www/Roots.mp4'
    };

    $scope.cartoon = [
        {
            season: 1,
            name: 1,
            series: [
                {
                    name: 1,
                    link: 2
                }
            ]
        }
    ];


};
app.controller("CartoonController", CartoonController);
CartoonController.$inject = ['$rootScope', '$scope', '$sce', '$state', '$stateParams', 'config'];