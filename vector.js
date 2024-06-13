export class Vector {
	constructor(x, y, z) {
		if (arguments.length > 1) {
			if (arguments.length == 2) z = 0;
			this.x = x;
			this.y = y;
			this.z = z;
			return this;
		} else {
			console.error("Error: Vector expected 2 or 3 arguments, not " + arguments.length);
		}
	}
	add(v, y, z) {
		if (arguments.length > 1) {
			if (arguments.length == 2) z = 0;
			this.x += v;
			this.y += y;
			this.z += z;
		} else {
			this.x += v.x;
			this.y += v.y;
			this.z += v.z;
		}
		return this;
	}
	sub(v, y, z) {
		if (arguments.length > 1) {
			if (arguments.length == 2) z = 0;
			this.x -= v;
			this.y -= y;
			this.z -= z;
		} else {
			this.x -= v.x;
			this.y -= v.y;
			this.z -= v.z;
		}
		return this;
	}
	div(n) {
		if (n == 0) {
			console.error("Error: div parameter cannot be 0");
		} else {
			this.x /= n;
			this.y /= n;
			this.z /= n;
		}
		return this;
	}
	mult(n) {
		this.x *= n;
		this.y *= n;
		this.z *= n;
		return this;
	}
	set(v, y, z) {
		if (arguments.length > 1) {
			if (arguments.length == 2) z = 0;
			this.x = v;
			this.y = y;
			this.z = z;
		} else {
			this.x = v.x;
			this.y = v.y;
			this.z = v.z;
		}
		return this;
	}
	rotate(angle, axis = "z") {
		let rot;
		if (axis == "x") rot = this.yz;
		if (axis == "y") rot = this.xz;
		if (axis == "z") rot = this.xy;
		let a = rot.heading + angle;
		let m = rot.mag;
		rot.set(Math.cos(a) * m, Math.sin(a) * m);
		if (axis == "x") this.yz = rot;
		if (axis == "y") this.xz = rot;
		if (axis == "z") this.xy = rot;
		return this;
	}

	get magSq() {
		return (this.x * this.x) + (this.y * this.y) + (this.z * this.z);
	}
	get mag() {
		return Math.sqrt(this.magSq);
	}
	get copy() {
		return new Vector(this.x, this.y, this.z);
	}
	get heading() {
		return Math.atan2(this.y, this.x);
	}
	get abs() {
		return new Vector(Math.abs(this.x), Math.abs(this.y), Math.abs(this.z));
	}
	max(v) {
		return new Vector(Math.max(this.x, v.x), Math.max(this.y, v.y), Math.max(this.z, v.z));
	}
	min(v) {
		return new Vector(Math.min(this.x, v.x), Math.min(this.y, v.y), Math.min(this.z, v.z));
	}
	dot(v) {
		return this.x * v.x + this.y * v.y + this.z * v.z;
	}
	get xy() {
		return new Vector(this.x, this.y);
	}
	get xz() {
		return new Vector(this.x, this.z);
	}
	get yz() {
		return new Vector(this.y, this.z);
	}
	set xy(v) {
		this.set(v.x, v.y, this.z);
	}
	set xz(v) {
		this.set(v.x, this.y, v.y);
	}
	set yz(v) {
		this.set(this.x, v.x, v.y);
	}

	set mag(n) {
		this.mult(n / this.mag);
		return this;
	}
	set heading(n) {
		this.rotate(n - this.heading);
		return this;
	}

	static add(v1, v2) {
		let v = v1.copy;
		v.add(v2);
		return v;
	}
	static sub(v1, v2) {
		let v = v1.copy;
		v.sub(v2);
		return v;
	}
	static mult(v, n) {
		let v2 = v.copy;
		v2.mult(n);
		return v2;
	}
	static div(v, n) {
		let v2 = v.copy;
		v2.div(n);
		return v2;
	}
	static rotate(v, angle, axis) {
		let v2 = v.copy;
		v2.rotate(angle, axis);
		return v2;
	}
	static dot(v1, v2) {
		return (v1.x * v2.x) + (v1.y * v2.y) + (v1.z * v2.z);
	}
	static get zero() {
		return new Vector(0, 0, 0);
	}
}
