var dash =  function () {
    return function(scope, element, attrs) {
        var url = "http://core.dev.cdnnow.ru/manifest.mpd";
        var player = dashjs.MediaPlayer().create();
        player.initialize(document.querySelector("#videoPlayer"), url, true);
    };
};
app.directive("dash", dash);