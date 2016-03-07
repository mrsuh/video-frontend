var MainResource = function ($resource, $http, config) {
    var resource = $resource(config.resource_host + config.resource_urls.list,
        {

        },
        {
            getArray: {
                method: 'GET',
                isArray: true
            }
        }
    );

    return {
        resource: resource,
        get: function (callback) {
            callback({
                populars:[
                    {
                        name_ru: 'Время приключений',
                        name_en:'Adventure Time',
                        poster: '/img/popular.jpg',
                        cartoon: 'adventure-time',
                        type: config.CONSTANT.TYPE.CARTOON.SERIES,
                        season: 1,
                        episode: 7
                    },
                    {
                        name_ru: 'Время приключений',
                        name_en:'Adventure Time',
                        poster: '/img/popular.jpg',
                        cartoon: 'adventure-time',
                        type: config.CONSTANT.TYPE.CARTOON.SERIES,
                        season: 1,
                        episode: 6
                    },
                    {
                        name_ru: 'Время приключений',
                        name_en:'Adventure Time',
                        poster: '/img/popular.jpg',
                        cartoon: 'adventure-time',
                        type: config.CONSTANT.TYPE.CARTOON.SERIES,
                        season: 1,
                        episode: 5
                    },
                    {
                        name_ru: 'Время приключений',
                        name_en:'Adventure Time',
                        poster: '/img/popular.jpg',
                        cartoon: 'adventure-time',
                        type: config.CONSTANT.TYPE.CARTOON.SERIES,
                        season: 1,
                        episode: 4
                    },
                    {
                        name_ru: 'Время приключений',
                        name_en:'Adventure Time',
                        poster: '/img/popular.jpg',
                        cartoon: 'adventure-time',
                        type: config.CONSTANT.TYPE.CARTOON.SERIES,
                        season: 1,
                        episode: 3
                    },
                    {
                        name_ru: 'Время приключений',
                        name_en:'Adventure Time',
                        poster: '/img/popular.jpg',
                        cartoon: 'adventure-time',
                        type: config.CONSTANT.TYPE.CARTOON.SERIES,
                        season: 1,
                        episode: 2
                    },
                    {
                        name_ru: 'Время приключений',
                        name_en:'Adventure Time',
                        poster: '/img/popular.jpg',
                        cartoon: 'adventure-time',
                        type: config.CONSTANT.TYPE.CARTOON.SERIES,
                        season: 1,
                        episode: 1
                    }
                ],
                fresh_mu: [
                    {
                        name_ru: 'Время приключений',
                        name_en:'Adventure Time',
                        poster: '/img/mu.jpg',
                        cartoon: 'adventure-time',
                        type: config.CONSTANT.TYPE.CARTOON.SERIES,
                        season: 1,
                        episode: 3
                    },
                    {
                        name_ru: 'Время приключений',
                        name_en:'Adventure Time',
                        poster: '/img/mu.jpg',
                        cartoon: 'adventure-time',
                        type: config.CONSTANT.TYPE.CARTOON.SERIES,
                        season: 1,
                        episode: 2
                    },
                    {
                        name_ru: 'Время приключений',
                        name_en:'Adventure Time',
                        poster: '/img/mu.jpg',
                        cartoon: 'adventure-time',
                        type: config.CONSTANT.TYPE.CARTOON.SERIES,
                        season: 1,
                        episode: 1
                    }
                ],
                fresh_an: [
                    {
                        name_ru: 'Наруто',
                        name_en:'Naruto',
                        poster: '/img/mu.jpg',
                        cartoon: 'naruto',
                        type: config.CONSTANT.TYPE.CARTOON.SERIES,
                        season: 1,
                        episode: 3
                    },
                    {
                        name_ru: 'Наруто',
                        name_en:'Naruto',
                        poster: '/img/mu.jpg',
                        cartoon: 'naruto',
                        type: config.CONSTANT.TYPE.CARTOON.SERIES,
                        season: 1,
                        episode: 2
                    },
                    {
                        name_ru: 'Наруто',
                        name_en:'Naruto',
                        poster: '/img/mu.jpg',
                        cartoon: 'naruto',
                        type: config.CONSTANT.TYPE.CARTOON.SERIES,
                        season: 1,
                        episode: 1
                    }
                ]
            });
        }
    }
};

app.factory('MainResource', MainResource);
MainResource.$inject = ['$resource', '$http', 'config'];