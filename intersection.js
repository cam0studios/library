window.linePointCollision = function (l1, l2, p) {
  let d1 = Vector.sub(l1, p).mag;
  let d2 = Vector.sub(l2, p).mag;
  let l = Vector.sub(l2, l1).mag;
  return d1 + d2 > l - 0.1 && d1 + d2 < l + 0.1;
}
window.lineClosestPoint = function (l1, l2, p) {
  let dif = Vector.sub(l2, l1);
  let dot = Vector.dot(Vector.sub(p, l1), Vector.sub(l2, l1)) / dif.magSq;
  return Vector.add(l1, Vector.mult(dif, dot));
}
window.lineCircleCollision = function (l1, l2, c, r) {
  if(Vector.sub(l1, c).mag < r || Vector.sub(l2, c).mag < r) return true;
  let closest = lineClosestPoint(l1, l2, c);
  if (!linePointCollision(l1, l2, closest)) return false;
  return Vector.sub(closest, c) < r;
}
