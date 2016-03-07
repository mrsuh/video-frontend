var dash =  function () {
    return function(scope, element, attrs) {
        console.info(attrs);
        var player = dashjs.MediaPlayer().create();
        player.initialize(document.querySelector("#videoPlayer"), attrs.url, true);
    };
};
app.directive("dash", dash);