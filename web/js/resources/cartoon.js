var CartoonResource = function ($resource, $http, config) {
    var resource = $resource(config.resource_host + config.resource_urls.cartoon,
        {
            playlist: '@playlist'
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
        get: function (cartoon, callback) {
            resource.get({
                cartoon: cartoon
            }, function (data) {
                callback(data);
            }, function (error) {
                callback(false);
            });
        },
        getPlaylist: function (cartoon, type, season, episode, callback) {
            resource.get({
                playlist: 'playlist',
                cartoon: cartoon,
                type: type,
                season: season,
                episode: episode
            }, function (data) {
                callback(data);
            }, function (error) {
                callback(false);
            });
        }
    }
};

app.factory('CartoonResource', CartoonResource);
CartoonResource.$inject = ['$resource', '$http', 'config'];