var ListResource = function ($resource, $http, config) {
    var resource = $resource(config.resource_host + config.resource_urls.list,
        {
            type: '@type',
            kind: '@kind'
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

        ///**
        // *
        // * @param kind an | mu
        // * @param type series | full | studio
        // * @param callback
        // */
        //get: function (kind, type, callback) {
        //    resource.getArray({
        //        kind: kind,
        //        type: type
        //    }, function (data) {
        //        callback(data);
        //    }, function (error) {
        //        callback(false);
        //    });
        //}

        /**
         *
         * @param kind an | mu
         * @param type series | full | studio
         * @param callback
         */
        get: function (kind, type, callback) {
            switch (true) {
                case kind === config.CONSTANT.KIND.CARTOON.ANIM && type === config.CONSTANT.TYPE.CARTOON.SERIES:
                    callback([
                        {
                            poster: '/img/mu.jpg',
                            name_ru: 'Наруто',
                            name_en: 'Naruto',
                            cartoon: 'naruto',
                            type: config.CONSTANT.TYPE.CARTOON.SERIES
                        },
                        {
                            poster: '/img/mu.jpg',
                            name_ru: 'K-ON',
                            name_en: 'K-ON',
                            cartoon: 'k-on',
                            type: config.CONSTANT.TYPE.CARTOON.SERIES
                        }
                    ]);
                    break;
                case kind === config.CONSTANT.KIND.CARTOON.ANIM && type === config.CONSTANT.TYPE.CARTOON.FULL:
                    callback([
                        {
                            poster: '/img/mu.jpg',
                            name_ru: 'Наруто',
                            name_en: 'Naruto',
                            cartoon: 'naruto',
                            type: config.CONSTANT.TYPE.CARTOON.FULL
                        },
                        {
                            poster: '/img/mu.jpg',
                            name_ru: 'K-ON',
                            name_en: 'K-ON',
                            cartoon: 'k-on',
                            type: config.CONSTANT.TYPE.CARTOON.FULL
                        }
                    ]);
                    break;
                case kind === config.CONSTANT.KIND.CARTOON.ANIM && type === config.CONSTANT.TYPE.CARTOON.STUDIO:
                    callback([
                        {
                            poster: '/img/mu.jpg',
                            name_ru: 'Дзибли',
                            name_en: 'Ghibli',
                            cartoon: 'ghibli',
                            type: config.CONSTANT.TYPE.CARTOON.STUDIO
                        }
                    ]);
                    break;
                case kind === config.CONSTANT.KIND.CARTOON.MULT && type === config.CONSTANT.TYPE.CARTOON.SERIES:
                    callback([
                        {
                            poster: '/img/mu.jpg',
                            name_ru: 'Время приключений',
                            name_en: 'Adventure time',
                            cartoon: 'adventure-time',
                            type: config.CONSTANT.TYPE.CARTOON.SERIES
                        },
                        {
                            poster: '/img/mu.jpg',
                            name_ru: 'Футурама',
                            name_en: 'Futurama',
                            cartoon: 'futurama',
                            type: config.CONSTANT.TYPE.CARTOON.SERIES
                        }
                    ]);
                    break;
                case kind === config.CONSTANT.KIND.CARTOON.MULT && type === config.CONSTANT.TYPE.CARTOON.FULL:
                    callback([
                        {
                            poster: '/img/mu.jpg',
                            name_ru: 'Время приключений',
                            name_en: 'Adventure time',
                            cartoon: 'adventure-time',
                            type: config.CONSTANT.TYPE.CARTOON.FULL
                        },
                        {
                            poster: '/img/mu.jpg',
                            name_ru: 'Футурама',
                            name_en: 'Futurama',
                            cartoon: 'futurama',
                            type: config.CONSTANT.TYPE.CARTOON.FULL
                        }
                    ]);
                    break;
                case kind === config.CONSTANT.KIND.CARTOON.MULT && type === config.CONSTANT.TYPE.CARTOON.STUDIO:
                    callback([
                        {
                            poster: '/img/mu.jpg',
                            name_ru: 'Пиксар',
                            name_en: 'Pixar',
                            cartoon: 'pixar',
                            type: config.CONSTANT.TYPE.CARTOON.STUDIO
                        }
                    ]);
                    break;
            }
        }
    }
};

app.factory('ListResource', ListResource);
ListResource.$inject = ['$resource', '$http', 'config'];