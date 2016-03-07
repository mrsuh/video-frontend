var CartoonResource = function ($resource, $http, config) {
    var resource = $resource(config.resource_host + config.resource_urls.list,
        {},
        {
            getArray: {
                method: 'GET',
                isArray: true
            }
        }
    );

    return {
        resource: resource,
        get: function (cartoon, callback) {
            var series = [];
            for (var i = 1; i <= 10; i++) {
                series.push({
                    poster: 'img',
                    episode: i
                });
            }

            var seasons = [];
            for (var s = 1; s <= 10; s++) {
                seasons.push({
                    id: s,
                    series: series
                })
            }
            callback({
                name_ru: 'Футурама',
                name_en: 'Futurama',
                cartoon: cartoon,
                genre: 'Комедия',
                premiere: '2015',
                country: 'США',
                season_count: '8',
                status: 'Выходит',
                rating_imdb: '8.8',
                rating_kinopoisk: '7.7',
                seasons: seasons
            });
        },
        getVideo: function (cartoon, type, season, episode, callback) {
            callback({
                url: 'http://core.dev.cdnnow.ru/manifest.mpd',
                poster: '/img/mu.jpg'
            })
        }
    }
};

app.factory('CartoonResource', CartoonResource);
CartoonResource.$inject = ['$resource', '$http', 'config'];