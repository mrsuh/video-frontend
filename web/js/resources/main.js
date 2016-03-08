var MainResource = function ($resource, $http, config) {
    var resource = $resource(config.resource_host + config.resource_urls.main,
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
        get: function (callback) {
            resource.get({
            }, function (data) {
                callback(data);
            }, function (error) {
                callback(false);
            });
        }
    }
};

app.factory('MainResource', MainResource);
MainResource.$inject = ['$resource', '$http', 'config'];