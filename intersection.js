const intersections = {
	linePointCollision: function (l1, l2, p) {
		let d1 = (l1)["-"](p);
		let d2 = (l2)["-"](p);
		let l = (l2)["-"](l1);
		return d1 + d2 > l - 0.1 && d1 + d2 < l + 0.1;
	},
	lineClosestPoint: function (l1, l2, p) {
		let dif = (l2)["-"](l1);
		let dot = (p)["-"](l1).dot(dif) / dif.magSq;
		return (l1)["+"]((dif)["*"](dot));
	},
	lineCircleCollision: function (l1, l2, c, r) {
		if ((l1)["-"](c) < r || (l2)["-"](c) < r) return true;
		let closest = lineClosestPoint(l1, l2, c);
		if (!linePointCollision(l1, l2, closest)) return false;
		return (closest)["-"](c) < r;
	}
};
if (window) window.intersections = intersections;