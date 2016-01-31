var router = function ($stateProvider, $urlRouterProvider, $locationProvider) {

    $urlRouterProvider.otherwise(function ($injector) {
        var $state = $injector.get("$state");
        $state.go("main");
    });

    $stateProvider

        .state('common', {
            templateUrl: 'html/layout.html',
            controller : 'CommonController',
            abstract   : true
        })

        .state('error', {
            url     : "/error/:status",
            controller : 'ErrorController',
            templateUrl: "html/error.html",
            parent  : 'common'
        })

        .state('main', {
            url        : "/main",
            controller : 'MainController',
            templateUrl: "html/main.html",
            parent  : 'common'
        })

    ;
};

app.config(['$stateProvider', '$urlRouterProvider', '$locationProvider', router]);