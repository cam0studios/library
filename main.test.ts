import Vector from "./main";

expect(Vector).toBeDefined();
expect(Vector).toBeInstanceOf(Function);

test("create 2D", () => {
    let vec = new Vector(1, 2);
    expect(vec).toBeDefined();
    expect(vec).toBeInstanceOf(Vector);
    expect(vec.x).toBe(1);
    expect(vec.y).toBe(2);
    expect(vec.dims).toBe(2);
});
test("create 3D", () => {
    let vec = new Vector(1, 2, 3);
    expect(vec).toBeDefined();
    expect(vec).toBeInstanceOf(Vector);
    expect(vec.x).toBe(1);
    expect(vec.y).toBe(2);
    expect(vec.z).toBe(3);
    expect(vec.dims).toBe(3);
});
test("create 4D", () => {
	let vec = new Vector(1, 2, 3, 4);
	expect(vec).toBeDefined();
	expect(vec).toBeInstanceOf(Vector);
	expect(vec.x).toBe(1);
	expect(vec.y).toBe(2);
	expect(vec.z).toBe(3);
	expect(vec.w).toBe(4);
	expect(vec.dims).toBe(4);
});

test("add vector 2D", () => {
    let a = new Vector(1, 2);
    let b = new Vector(3, 4);
    let c = a.copy;
    c.add(b);
    expect(c).toEqual(new Vector(4, 6));
    expect(c).toEqual((a)["+"](b));
    expect(c).toEqual(Vector.add(a, b));
	a["+="](b);
	expect(a).toEqual(c);
});
test("add vector 3D", () => {
    let a = new Vector(1, 2, 3);
    let b = new Vector(4, 5, 6);
    let c = a.copy;
    c.add(b);
    expect(c).toEqual(new Vector(5, 7, 9));
    expect(c).toEqual((a)["+"](b));
    expect(c).toEqual(Vector.add(a, b));
	a["+="](b);
	expect(a).toEqual(c);
});
test("add vector 4D", () => {
    let a = new Vector(1, 2, 3, 4);
    let b = new Vector(5, 6, 7, 8);
    let c = a.copy;
    c.add(b);
    expect(c).toEqual(new Vector(6, 8, 10, 12));
    expect(c).toEqual((a)["+"](b));
    expect(c).toEqual(Vector.add(a, b));
	a["+="](b);
	expect(a).toEqual(c);
});
test("add components", () => {
    let a = new Vector(1, 2);
    let b = a.copy;
    b.add(3, 4);
    expect(b).toEqual(new Vector(4, 6));
});

test("sub vector 2D", () => {
    let a = new Vector(1, -2);
    let b = new Vector(-3, 4);
    let c = a.copy;
    c.sub(b);
    expect(c).toEqual(new Vector(4, -6));
    expect(c).toEqual((a)["-"](b));
    expect(c).toEqual(Vector.sub(a, b));
	a["-="](b);
	expect(a).toEqual(c);
});
test("sub vector 3D", () => {
    let a = new Vector(1, -2, 3);
    let b = new Vector(-4, 5, -6);
    let c = a.copy;
    c.sub(b);
    expect(c).toEqual(new Vector(5, -7, 9));
    expect(c).toEqual((a)["-"](b));
    expect(c).toEqual(Vector.sub(a, b));
	a["-="](b);
	expect(a).toEqual(c);
});
test("sub vector 4D", () => {
    let a = new Vector(1, -2, 3, 4);
    let b = new Vector(-5, 6, -7, -8);
    let c = a.copy;
    c.sub(b);
    expect(c).toEqual(new Vector(6, -8, 10, 12));
    expect(c).toEqual((a)["-"](b));
    expect(c).toEqual(Vector.sub(a, b));
	a["-="](b);
	expect(a).toEqual(c);
});
test("sub components", () => {
    let a = new Vector(1, -2);
    let b = a.copy;
    b.sub(-3, 4);
    expect(b).toEqual(new Vector(4, -6));
});

test("mult vector 2D", () => {
    let a = new Vector(1, 2);
    let b = new Vector(3, 4);
    let c = a.copy;
    c.mult(b);
    expect(c).toEqual(new Vector(3, 8));
    expect(c).toEqual((a)["*"](b));
    expect(c).toEqual(Vector.mult(a, b));
	a["*="](b);
	expect(a).toEqual(c);
});
test("mult vector 3D", () => {
    let a = new Vector(1, 2, 3);
    let b = new Vector(4, 5, 6);
    let c = a.copy;
    c.mult(b);
    expect(c).toEqual(new Vector(4, 10, 18));
    expect(c).toEqual((a)["*"](b));
    expect(c).toEqual(Vector.mult(a, b));
	a["*="](b);
	expect(a).toEqual(c);
});
test("mult vector 4D", () => {
    let a = new Vector(1, 2, 3, 4);
    let b = new Vector(5, 6, 7, 8);
    let c = a.copy;
    c.mult(b);
    expect(c).toEqual(new Vector(5, 12, 21, 32));
    expect(c).toEqual((a)["*"](b));
    expect(c).toEqual(Vector.mult(a, b));
	a["*="](b);
	expect(a).toEqual(c);
});
test("mult number", () => {
    let a = new Vector(1, 2);
    let n = 3;
    let b = a.copy;
    b.mult(n);
    expect(b).toEqual(new Vector(3, 6));
    expect(b).toEqual((a)["*"](n));
    expect(b).toEqual(Vector.mult(a, n));
	a["*="](n);
	expect(a).toEqual(b);
});

test("div vector 2D", () => {
    let a = new Vector(3, 4);
    let b = new Vector(1, 2);
    let c = a.copy;
    c.div(b);
    expect(c).toEqual(new Vector(3, 2));
    expect(c).toEqual((a)["/"](b));
    expect(c).toEqual(Vector.div(a, b));
	expect(() => a.copy.div(new Vector(0, 0))).toThrow("Div parameter cannot be zero");
	a["/="](b);
	expect(a).toEqual(c);
});
test("div vector 3D", () => {
    let a = new Vector(3, 4, 5);
    let b = new Vector(1, 2, 4);
    let c = a.copy;
    c.div(b);
    expect(c).toEqual(new Vector(3, 2, 1.25));
    expect(c).toEqual((a)["/"](b));
    expect(c).toEqual(Vector.div(a, b));
	expect(() => a.copy.div(new Vector(0, 0, 0))).toThrow("Div parameter cannot be zero");
	a["/="](b);
	expect(a).toEqual(c);
});
test("div vector 4D", () => {
    let a = new Vector(3, 4, 5, 6);
    let b = new Vector(1, 2, 4, 3);
    let c = a.copy;
    c.div(b);
    expect(c).toEqual(new Vector(3, 2, 1.25, 2));
    expect(c).toEqual((a)["/"](b));
    expect(c).toEqual(Vector.div(a, b));
	expect(() => a.div(new Vector(0, 0, 0, 0))).toThrow("Div parameter cannot be zero");
	a["/="](b);
	expect(a).toEqual(c);
});
test("div number", () => {
    let a = new Vector(3, 4);
    let n = 2;
    let b = a.copy;
    b.div(n);
    expect(b).toEqual(new Vector(1.5, 2));
    expect(b).toEqual((a)["/"](n));
    expect(b).toEqual(Vector.div(a, n));
	expect(() => {
		a.div(0);
	}).toThrow("Div parameter cannot be zero");
	a["/="](n);
	expect(a).toEqual(b);
});

test("set vector", () => {
    let a = new Vector(1, 2);
    let b = new Vector(3, 4);
    let c = a.copy;
    c.set(b);
    expect(c).toEqual(b);
    c["="](a);
    expect(c).toEqual(a);
    expect((a)["=="](b)).toBe(false);
    expect((a)["=="](c)).toBe(true);
	a["="](b);
	expect(a).toEqual(b);
});
test("set components", () => {
    let a = new Vector(1, 2);
    let b = a.copy;
    b.set(3, 4);
    expect(b).toEqual(new Vector(3, 4));
});
test("set array", () => {
    let a = new Vector(1, 2);
    let b = a.copy;
    b.set([3, 4]);
    expect(b).toEqual(new Vector(3, 4));
});

test("rotate 2D", () => {
    let a = new Vector(2, 1);
    let b = a.copy;
    b.rotate(Math.PI / 2);
    expect(b.x).toBeCloseTo(-1);
    expect(b.y).toBeCloseTo(2);
    expect(b).toEqual(Vector.rotate(a, Math.PI / 2));
});
test("rotate 3D", () => {
    let a = new Vector(3, 0, 1);
    let b = a.copy;
    b.rotate(Math.PI / 2, "y");
    expect(b.x).toBeCloseTo(-1);
    expect(b.y).toBeCloseTo(0);
    expect(b.z).toBeCloseTo(3);
    expect(b).toEqual(Vector.rotate(a, Math.PI / 2, "y"));
});

test("normalize", () => {
    let a = new Vector(3, 4);
    let b = a.copy;
    b.normalize();
    expect(b.x).toBeCloseTo(0.6);
    expect(b.y).toBeCloseTo(0.8);
    expect(b).toEqual(Vector.normalize(a));
    expect(b.mag).toBeCloseTo(1);
    expect(b).toEqual(a.normalized);
	a = new Vector(1, 2, 2, 4);
	b = a.copy;
	b.normalize();
	expect(b.x).toBeCloseTo(0.2);
	expect(b.y).toBeCloseTo(0.4);
	expect(b.z).toBeCloseTo(0.4);
	expect(b.w).toBeCloseTo(0.8);
	expect(b).toEqual(Vector.normalize(a));
	expect(b.mag).toBeCloseTo(1);
	expect(b).toEqual(a.normalized);
});

test("reflect", () => {
    let a = new Vector(2, -1);
    let b = a.copy;
    b.reflect(new Vector(1, 0));
    expect(b).toEqual(new Vector(2, 1));
    // expect(b).toEqual(Vector.reflect(a, new Vector(0, 1)));
	a = new Vector(2, -1, 3, 4);
	b = a.copy;
	b.reflect(new Vector(1, 0, 0, 0));
	expect(b).toEqual(new Vector(2, 1, -3, -4));
	// expect(b).toEqual(Vector.reflect(a, new Vector(0, 1, 0, 0)));
});

test("magSq", () => {
    let a = new Vector(3, 4);
    expect(a.magSq).toBe(25);
    // expect(Vector.magSq(a)).toBe(25);
	let b = new Vector(1, 2, 2, 4);
	expect(b.magSq).toBe(25);
	// expect(Vector.magSq(b)).toBe(25);
});

test("mag", () => {
    let a = new Vector(3, 4);
    expect(a.mag).toBeCloseTo(5);
    // expect(Vector.mag(a)).toBeCloseTo(5);
    a.mag = 10;
    expect(a.mag).toBeCloseTo(10);
    expect(a.x).toBeCloseTo(6);
    expect(a.y).toBeCloseTo(8);
	let b = new Vector(1, 2, 2, 4);
	expect(b.mag).toBeCloseTo(5);
	// expect(Vector.mag(b)).toBeCloseTo(5);
	b.mag = 10;
	expect(b.mag).toBeCloseTo(10);
	expect(b.x).toBeCloseTo(2);
	expect(b.y).toBeCloseTo(4);
	expect(b.z).toBeCloseTo(4);
	expect(b.w).toBeCloseTo(8);

});

test("copy", () => {
    let a = new Vector(1, 2);
    let b = a.copy;
    expect(b).toEqual(a);
    expect(b).not.toBe(a);
});

test("heading", () => {
    let a = new Vector(1, 0);
    expect(a.heading).toBeCloseTo(0);
    a["="](new Vector(0, 1));
    expect(a.heading).toBeCloseTo(Math.PI / 2);
    a.heading = Math.PI;
    expect(a.x).toBeCloseTo(-1);
    expect(a.y).toBeCloseTo(0);
    expect(a.heading).toBeCloseTo(Math.PI);
});

test("abs", () => {
    let a = new Vector(-1, 2);
    let b = a.abs;
    expect(b).toEqual(new Vector(1, 2));
    // expect(b).toEqual(Vector.abs(a));
	a = new Vector(-1, -2, 3, -4);
	b = a.abs;
	expect(b).toEqual(new Vector(1, 2, 3, 4));
	// expect(b).toEqual(Vector.abs(a));
});

test("max", () => {
    let a = new Vector(1, 4);
    let b = new Vector(3, 2);
    let c = a.max(b);
    expect(c).toEqual(new Vector(3, 4));
    // expect(c).toEqual(Vector.max(a, b));
	a = new Vector(1, 4, 5, 6);
	b = new Vector(3, 2, 7, 8);
	c = a.max(b);
	expect(c).toEqual(new Vector(3, 4, 7, 8));
	// expect(c).toEqual(Vector.max(a, b));
});

test("min", () => {
    let a = new Vector(1, 4);
    let b = new Vector(3, 2);
    let c = a.min(b);
    expect(c).toEqual(new Vector(1, 2));
    // expect(c).toEqual(Vector.min(a, b));
	a = new Vector(1, 4, 5, 6);
	b = new Vector(3, 2, 7, 8);
	c = a.min(b);
	expect(c).toEqual(new Vector(1, 2, 5, 6));
	// expect(c).toEqual(Vector.min(a, b));
});

test("dot", () => {
    let a = new Vector(1, 2);
    let b = new Vector(3, 4);
    expect(a.dot(b)).toBe(11);
    expect(Vector.dot(a, b)).toBe(11);
	a = new Vector(1, 2, 3, 4);
	b = new Vector(5, 6, 7, 8);
	expect(a.dot(b)).toBe(70);
	expect(Vector.dot(a, b)).toBe(70);
});

test("cross", () => {
    let a = new Vector(1, 2);
    let b = new Vector(3, 4);
    expect(a.cross(b)).toEqual(new Vector(0, 0, -2));
    expect(Vector.cross(a, b)).toEqual(new Vector(0, 0, -2));
	a = new Vector(1, 2, -3);
	b = new Vector(5, -6, 7);
	expect(a.cross(b)).toEqual(new Vector(-4, -22, -16));
	expect(Vector.cross(a, b)).toEqual(new Vector(-4, -22, -16));
});

test("lerp", () => {
    let a = new Vector(1, 2);
    let b = new Vector(3, 4);
    let c = a.lerp(b, 0.5);
    expect(c).toEqual(new Vector(2, 3));
    expect(c).toEqual(Vector.lerp(a, b, 0.5));
	a = new Vector(1, 2, 3, 4);
	b = new Vector(5, 6, 7, 8);
	c = a.lerp(b, 0.5);
	expect(c).toEqual(new Vector(3, 4, 5, 6));
	expect(c).toEqual(Vector.lerp(a, b, 0.5));
});

test("apply", () => {
    let a = new Vector(1, 2, 3, 4);
    let b = a.copy;
    let f = (n: number) => n + 4;
    b.apply(f);
    expect(b).toEqual(new Vector(5, 6, 7, 8));
    expect(b).toEqual(Vector.apply(a, f));
});

test("swizzles", () => {
    let a = new Vector(1, 2, 3);
    expect(a.xy).toEqual(new Vector(1, 2));
    expect(a.xz).toEqual(new Vector(1, 3));
    expect(a.yx).toEqual(new Vector(2, 1));
    expect(a.yz).toEqual(new Vector(2, 3));
    expect(a.zx).toEqual(new Vector(3, 1));
    expect(a.zy).toEqual(new Vector(3, 2));
});

test("zero", () => {
    expect(Vector.zero(2)).toEqual(new Vector(0, 0));
    expect(Vector.zero(3)).toEqual(new Vector(0, 0, 0));
	expect(Vector.zero(4)).toEqual(new Vector(0, 0, 0, 0));
    expect(Vector.zero2D).toEqual(new Vector(0, 0));
    expect(Vector.zero3D).toEqual(new Vector(0, 0, 0));
	expect(Vector.zero4D).toEqual(new Vector(0, 0, 0, 0));
});

test("mod", () => {
    let a = new Vector(5, 3);
    let b = new Vector(2, 4);
    let c = a.mod(b);
    expect(c).toEqual(new Vector(1, 3));
    // expect(c).toEqual(Vector.mod(a, b));
    expect(c).toEqual((a)["%"](b));
	a = new Vector(5, 3, 7, 9);
	b = new Vector(2, 4, 6, 8);
	c = a.mod(b);
	expect(c).toEqual(new Vector(1, 3, 1, 1));
	// expect(c).toEqual(Vector.mod(a, b));
});

test("iterator", () => {
    let a = new Vector(1, 2, 3);
    let sum = 0;
    for (let v of a) {
        sum += v;
    }
    expect(sum).toBe(6);
    expect([...a]).toEqual([1, 2, 3]);
    let b = new Vector(1, 2);
    expect([...b]).toEqual([1, 2]);
	let c = new Vector(1, 2, 3, 4);
	expect([...c]).toEqual([1, 2, 3, 4]);
});

test("toString", () => {
    let a = new Vector(1, 2, 3);
    expect(a.toString()).toBe("(1, 2, 3)");
    let b = new Vector(1, 2);
    expect(b.toString()).toBe("(1, 2)");
	let c = new Vector(1, 2, 3, 4);
	expect(c.toString()).toBe("(1, 2, 3, 4)");
});