export function multiplySvgPointsService(
  points: string,
  iconSize: number,
  width: number,
  height: number,
) {
  const iconMaxSize = Math.min(width, height) * 0.5;
  const scale = iconMaxSize / iconSize;
  return points.replace(/([0-9,\.]{1,})/g, (coords) => {
    const [_x, _y]: Array<number> = coords.split(',').map((p) => parseFloat(p));
    const x = _x * scale + width / 2 - (iconSize * scale) / 2;
    const y = _y * scale + height / 2 - (iconSize * scale) / 2;
    if (iconMaxSize >= 100) {
      return `${Math.round(x)},${Math.round(y)}`;
    }
    return `${x},${y}`;
  });
}
