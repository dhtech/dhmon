var scaling = 3;
var switches = {};
var canvas = null;

function getQueryParams(qs) {
    qs = qs.split("+").join(" ");
    var params = {},
        tokens,
        re = /[?&]?([^=]+)=([^&]*)/g;

    while (tokens = re.exec(qs)) {
        params[decodeURIComponent(tokens[1])]
            = decodeURIComponent(tokens[2]);
    }

    return params;
}

function renderRectangle(object, fillColor) {
    var ctx = canvas.getContext('2d');
    ctx.fillStyle = fillColor;
    var width = object.horizontal == 1 ? object.width : object.height;
    var height = object.horizontal == 1 ? object.height : object.width;
    width = width * scaling;
    height = height * scaling;
    var x1 = object.x1 * scaling;
    var y1 = object.y1 * scaling;
    ctx.clearRect(x1, y1, width, height);
    ctx.fillRect(x1, y1, width, height);
    ctx.strokeRect(x1, y1, width, height);
}

function renderSwitch(object) {
    switches[object.name] = object;
    renderRectangle(object, "rgb(137,245,108)");
}

function renderTable(object) {
    renderRectangle(object, "rgb(212,212,212)");
}

function setSwitchColor(name, color) {
    renderRectangle(switches[name], color);
}

function markSwitchAlert(name) {
    setSwitchColor(name, "rgb(256,0,0)");
}

var renders= { 'switch': renderSwitch, 'table': renderTable };

$(document).ready(function() {
    var params = getQueryParams(document.location.search);
    var hall = params['hall'];
    canvas = document.getElementById('screen');
    ctx = canvas.getContext('2d');
    ctx.canvas.width  = window.innerWidth;
    ctx.canvas.height = window.innerHeight;
    $.getJSON('/ui/load?hall=' + hall, function(objects) {
       for ( var i in objects ) {
          renders[objects[i]['class']](objects[i]);
       }
    });
});
