var canvas;
var dc;
var defaultWidth = window.innerWidth - 20;
var defaultHeight = window.innerHeight; - 25

function initCanvas() {
  canvas = document.getElementById("canvas");
  canvas.width = defaultWidth;
  canvas.height = defaultHeight;
  dc = canvas.getContext("2d");
}

function drawCircle(x, y, radius, color) {
  dc.save();
  dc.strokeStyle = "#000000";
  dc.fillStyle = color;
  dc.beginPath();
  dc.arc(x,y,radius,0,Math.PI*2,true);
  dc.closePath();
  dc.stroke();
  dc.fill();
  dc.restore();
}

function addText(x, y, text) {
  dc.save();
  dc.font = "bold 14px sans-serif";
  dc.textAlign = "center";
  dc.textBaseline = "middle";
  dc.fillText(text, x, y)
  dc.restore();
}

function distributeRRCs(x,y, radius, rrcs) {
  var numberOfRrcs = rrcs.length;
  for (var i=0; i<numberOfRrcs; i++) {

    var distribution = i * (Math.PI * 2 / numberOfRrcs);
    var relativeX = Math.sin(distribution);
    var relativeY = Math.cos(distribution);

    var realX = relativeX * radius + x;
    var realY = relativeY * radius + y;

    drawCircle(realX, realY, 20, '#00FF00');
    addText(realX, realY, rrcs[i]);
  }
}

processRouteData(data) {

}
