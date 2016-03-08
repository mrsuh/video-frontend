var ListResource = function ($resource, $http, config) {
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

        /**
         *
         * @param kind an | mu
         * @param type series | full | studio
         * @param callback
         */
        get: function (kind, type, callback) {
            resource.getArray({
                kind: kind,
                type: type
            }, function (data) {
                callback(data);
            }, function (error) {
                callback(false);
            });
        }
    }
};

app.factory('ListResource', ListResource);
ListResource.$inject = ['$resource', '$http', 'config'];