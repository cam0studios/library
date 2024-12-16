import Vector from "./vector";

export const intersections = {
	/**
	 * Checks if a point is on a line
	 * @param {Vector} l1 - The first point of the line
	 * @param {Vector} l2 - The second point of the line
	 * @param {Vector} p - The point to check
	 * @returns {boolean} - Whether the point is on the line
	 */
	linePointCollision: function (l1, l2, p) {
		let d1 = (l1)["-"](p);
		let d2 = (l2)["-"](p);
		let l = (l2)["-"](l1);
		return d1 + d2 > l - 0.1 && d1 + d2 < l + 0.1;
	},
	/**
	 * Gets the closest point on a line to a point
	 * @param {Vector} l1 - The first point of the line
	 * @param {Vector} l2 - The second point of the line
	 * @param {Vector} p - The point to check
	 * @returns {Vector} - The closest point on the line
	 */
	lineClosestPoint: function (l1, l2, p) {
		let dif = (l2)["-"](l1);
		let dot = (p)["-"](l1).dot(dif) / dif.magSq;
		return (l1)["+"]((dif)["*"](dot));
	},
	/**
	 * 
	 * @param {Vector} l1 - The first point of the line
	 * @param {Vector} l2 - The second point of the line
	 * @param {Vector} c - The center of the circle
	 * @param {number} r - The radius of the circle
	 * @returns 
	 */
	lineCircleCollision: function (l1, l2, c, r) {
		if ((l1)["-"](c) < r || (l2)["-"](c) < r) return true;
		let closest = this.lineClosestPoint(l1, l2, c);
		if (!this.linePointCollision(l1, l2, closest)) return false;
		return (closest)["-"](c) < r;
	}
};