function multiplySvgPoints(pointsString, iconSize, width, height) {
  var iconMaxSize = Math.min(width, height) * 0.5;
  var scale = iconMaxSize / iconSize; // eslint-disable-next-line

  return pointsString.replace(/([0-9,\.]{1,})/g, function (coords) {
    // eslint-disable-next-line
    coords = coords.split(',').map(function (p) {
      return parseFloat(p);
    });
    var x = coords[0] * scale + width / 2 - iconSize * scale / 2;
    var y = coords[1] * scale + height / 2 - iconSize * scale / 2;

    if (iconMaxSize >= 100) {
      return Math.round(x) + "," + Math.round(y);
    }

    return x + "," + y;
  });
}

export default multiplySvgPoints;