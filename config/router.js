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
            url        : "",
            views: {
                'content@common' : {
                    templateUrl: "html/main.html",
                    controller : 'MainController'
                }
            },
            parent  : 'common'
        })

        .state('list', {
            url        : "/list",
            controller : 'ListController',
            templateUrl: "html/list.html",
            parent  : 'common'
        })

        .state('film', {
            url        : "/film/:film_name/:series",
            controller : 'FilmController',
            templateUrl: "html/film.html",
            parent  : 'common'
        })

    ;
};

app.config(['$stateProvider', '$urlRouterProvider', '$locationProvider', router]);