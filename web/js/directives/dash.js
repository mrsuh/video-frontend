var dash = function () {
    return function (scope, element, attrs) {
            var player = dashjs.MediaPlayer().create();//@todo
            player.initialize(document.querySelector("#videoPlayer"), attrs.url, false);
    };
};
app.directive("dash", dash);