var router = function ($stateProvider, $urlRouterProvider, $locationProvider) {

    $urlRouterProvider.otherwise(function ($injector) {
        var $state = $injector.get("$state");
        $state.go("main");
    });

    $stateProvider

        .state('common', {
            templateUrl: 'html/layout.html',
            controller: 'CommonController',
            abstract: true
        })

        .state('error', {
            url: "/error/:status",
            controller: 'ErrorController',
            templateUrl: "html/error.html",
            parent: 'common'
        })

        .state('main', {
            url: "",
            views: {
                'content@common': {
                    templateUrl: "html/main/main.html",
                    controller: 'MainController'
                }
            },
            parent: 'common'
        })

        .state('cartoon', {
            url: "/cartoon/:cartoon/:type/:season/:episode",
            views: {
                'content@common': {
                    templateUrl: "html/cartoon/cartoon.html",
                    controller: 'CartoonController'
                }
            },
            parent: 'common'
        })

        .state('list_mu', {
            url: "/list/mu",
            views: {
                'content@common': {
                    templateUrl: 'html/list/layout.html',
                    controller: 'ListController'
                }
            },
            abstract: true,
            parent: 'common'
        })

        .state('list_mu.series', {
            url: "/series",
            views: {
                'list@list_mu': {
                    controller: 'ListMuSeriesController',
                    templateUrl: "html/list/mu/series.html"
                }
            }
        })

        .state('list_mu.full', {
            url: "/full",
            views: {
                'list@list_mu': {
                    controller: 'ListMuFullController',
                    templateUrl: "html/list/mu/full.html"
                }
            }
        })

        .state('list_mu.studio', {
            url: "/studio",
            views: {
                'list@list_mu': {
                    controller: 'ListMuStudioController',
                    templateUrl: "html/list/mu/studio.html"
                }
            }
        })

        .state('list_an', {
            url: "/list/an",
            views: {
                'content@common': {
                    templateUrl: 'html/list/layout.html',
                    controller: 'ListController'
                }
            },
            abstract: true,
            parent: 'common'
        })

        .state('list_an.series', {
            url: "/series",
            views: {
                'list@list_an': {
                    controller: 'ListAnSeriesController',
                    templateUrl: "html/list/an/series.html"
                }
            }
        })

        .state('list_an.full', {
            url: "/full",
            views: {
                'list@list_an': {
                    controller: 'ListAnFullController',
                    templateUrl: "html/list/an/full.html"
                }
            }
        })

        .state('list_an.studio', {
            url: "/studio",
            views: {
                'list@list_an': {
                    controller: 'ListAnStudioController',
                    templateUrl: "html/list/an/studio.html"
                }
            }
        })

    ;
};

app.config(['$stateProvider', '$urlRouterProvider', '$locationProvider', router]);