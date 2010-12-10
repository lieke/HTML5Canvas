var asNumber = '3333';
var canvas;
var dc;
var defaultWidth = window.innerWidth - 20;
var defaultHeight = window.innerHeight; - 25

Object.size = function(obj) {
    var size = 0, key;
    for (key in obj) {
        if (obj.hasOwnProperty(key)) size++;
    }
    return size;
};


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

  var numberOfRrcs = Object.size(rrcs);
  for (var i=0; i<numberOfRrcs; i++) {

    var distribution = i * (Math.PI * 2 / numberOfRrcs);
    var relativeX = Math.sin(distribution);
    var relativeY = Math.cos(distribution);

    var realX = relativeX * radius + x;
    var realY = relativeY * radius + y;

    drawCircle(realX, realY, 20, '#00FF00');
    addText(realX, realY, i);
  }
}

function distributeInners(displaydata, counts, x, y, radius) {

  var numberCounts = Object.size(counts);
  var processed = [];
  for (var name in displaydata) { 
    var level = displaydata[name];
    if (!processed[level]) processed[level] = 0;

    var distribution = processed[level] * (Math.PI * 2 / counts[level]);
    processed[level]++;
    var relativeX = Math.sin(distribution);
    var relativeY = Math.cos(distribution);

    var realX = relativeX * radius * level * (1 / numberCounts)  + x;
    var realY = relativeY * radius * level * (1 / numberCounts)  + y;

    drawCircle(realX, realY, 20, '#FFFF00');
    addText(realX, realY, name);
  }
}

function drawLine(xFrom, yFrom, xTo, yTo) {
  dc.save();
  dc.lineWidth = 3.0;
  dc.lineCap = "round";
  dc.moveTo(xFrom, yFrom);
  dc.lineTo(xTo, yTo);
  dc.stroke();
  dc.restore();
}
function processRouteData(data) {

  distributeRRCs(defaultWidth / 2, defaultHeight / 2, 300, data);
  
  var key2;
  var displayData = {};
  var asCounts = {};
  for (key2 in data) {
    var paths = data[key2];
    var path;
    for (index in paths) {
      var count = 0;
      path = paths[index];
      var as;
      for (var j=path.length - 2; j>=0; j--) {
        as = path[j]
        count++;
        // TODO filter out duplicates in path
        if (!displayData[as]) {
          displayData[as] = count;
          if (!asCounts[count]) {
             asCounts[count] = 0;
          }
          asCounts[count] = asCounts[count] + 1;
        }
      }
    }
  }
  
  distributeInners(displayData, asCounts, defaultWidth / 2, defaultHeight / 2, 300);

}
