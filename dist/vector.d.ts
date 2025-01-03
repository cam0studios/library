/** A class for 2D and 3D vectors */
export default class Vector {
    [x: number]: (hint: any) => string | Vector;
    /**
     * Add two vectors
     * @param {Vector} v1 - The first vector
     * @param {Vector} v2 - The second vector
     * @returns {Vector} The completed result
     */
    static add(v1: Vector, v2: Vector): Vector;
    /**
     * Subtracts a vector from another vector
     * @param {Vector} v1 - The first vector
     * @param {Vector} v2 - The second vector
     * @returns {Vector} The completed result
     */
    static sub(v1: Vector, v2: Vector): Vector;
    /**
     * Multiplies two vectors
     * @param {Vector} v1 - The first vector
     * @param {Vector} v2 - The second vector
     * @returns {Vector} The completed result
     */
    static mult(v: any, n: any): Vector;
    /**
     * Divides a vector by another vector
     * @param {Vector} v1 - The first vector
     * @param {Vector} v2 - The second vector
     * @returns {Vector} The completed result
     */
    static div(v: any, n: any): Vector;
    /**
     * Rotates a vector by an angle and an axis
     * @param {Vector} v - The vector
     * @param {Vector} angle - The angle to rotate by
     * @param {Vector} [axis="z"] - The axis to rotate around
     * @returns {Vector} The completed result
     */
    static rotate(v: Vector, angle: Vector, axis?: Vector): Vector;
    /**
     * Gets the dot product of two vectors
     * @param {Vector} v1 - The first vector
     * @param {Vector} v2 - The second vector
     * @returns {Vector} The completed result
     */
    static dot(v1: Vector, v2: Vector): Vector;
    /**
     * Linearly interpolates between two vectors
     * @param {Vector} v1 - The first vector
     * @param {Vector} v2 - The second vector
     * @returns {Vector} The completed result
     */
    static lerp(v1: Vector, v2: Vector, n: any): Vector;
    /**
     * Gets the normalized vector of a vector
     * @param {Vector} v - The vector
     * @returns {Vector} The completed result
     */
    static normalize(v: Vector): Vector;
    /**
     * Gets a vector (0, 0, 0)
     * @returns {Vector} (0, 0, 0)
     */
    static get zero(): Vector;
    /**
     * Create a new vector object
     * @param {number} x - The x component of the vector
     * @param {number} y - The y component of the vector
     * @param {number} [z=0] - The z component of the vector (optional)
     * @returns {Vector} A new Vector object
     * @example
     * let a = new Vector(1, 2);
     */
    constructor(x: number, y: number, z?: number, ...args: any[]);
    x: number;
    y: number;
    z: number;
    /**
     * Add a vector to this vector
     * @param {number|Vector} v - The vector to add, or the x component of the vector
     * @param {number} y - The y component of the vector (optional)
     * @param {number} z - The z component of the vector (optional)
     * @returns {Vector} The vector object
     */
    add(v: number | Vector, y: number, z: number, ...args: any[]): Vector;
    /**
     * Subtract a vector from this vector
     * @param {number|Vector} v - The vector to subtract, or the x component of the vector
     * @param {number} y - The y component of the vector (optional)
     * @param {number} z - The z component of the vector (optional)
     * @returns {Vector} The vector object
     */
    sub(v: number | Vector, y: number, z: number, ...args: any[]): Vector;
    /**
     * Divide this vector by a number or vector
     * @param {number|Vector} v - The number or vector to divide by
     * @returns {Vector} The vector object
     */
    div(n: any): Vector;
    /**
     * Multiply this vector by a number or vector
     * @param {number|Vector} v - The number or vector to multiply by
     * @returns {Vector} The vector object
     */
    mult(n: any): Vector;
    /**
     * Set this vector to another vector
     * @param {number|Vector} v - The vector to add, or the x component of the vector
     * @param {number} [y=0] - The y component of the vector (optional)
     * @param {number} [z=0] - The z component of the vector (optional)
     * @returns {Vector} The vector object
     */
    set(v: number | Vector, y?: number, z?: number, ...args: any[]): Vector;
    /**
     * Rotate this vector by an angle
     * @param {number} angle - The angle to rotate by in radians
     * @param {string} [axis="z"] - The axis to rotate around (optional)
     * @returns {Vector} The vector object
     */
    rotate(angle: number, axis?: string): Vector;
    /**
     * Sets the y and z components of this vector
     * @param {Vector} v - The 2D vector to set
     * @returns {Vector} The modified vector
     */
    set yz(v: Vector);
    /**
     * Get the 2D vector (y, z) of this vector
     * @returns {Vector} The 2D vector
     */
    get yz(): Vector;
    /**
     * Sets the x and z components of this vector
     * @param {Vector} v - The 2D vector to set
     * @returns {Vector} The modified vector
     */
    set xz(v: Vector);
    /**
     * Get the 2D vector (x, z) of this vector
     * @returns {Vector} The 2D vector
     */
    get xz(): Vector;
    /**
     * Sets the x and y components of this vector
     * @param {Vector} v - The 2D vector to set
     * @returns {Vector} The modified vector
     */
    set xy(v: Vector);
    /**
     * Get the 2D vector (x, y) of this vector
     * @returns {Vector} The 2D vector
     */
    get xy(): Vector;
    /**
     * Normalize this vector
     * @returns {Vector} The normalized vector object
     */
    normalize(): Vector;
    /**
     * Reflect this vector off another vector
     * @param {Vector} v - The number or vector to reflect off of
     * @returns {Vector} The vector object
     */
    reflect(v: Vector): Vector;
    /**
     * Get the squared magnitude of the vector
     * @returns {number} The squared magnitude
     */
    get magSq(): number;
    /**
     * Multiplies this vector to a magnitude
     * @param {number} n - The magnitude to set to
     * @returns {Vector} The modified vector
     */
    set mag(n: number);
    /**
     * Get the magnitude of the vector
     * @returns {number} The magnitude
     */
    get mag(): number;
    /**
     * Get the normalized vector
     * @returns {Vector} The normalized vector
     */
    get normalized(): Vector;
    /**
     * Get a copy of the vector
     * @returns {Vector} The copied vector
     */
    get copy(): Vector;
    /**
     * Rotate this vector to a heading (2D only)
     * @param {Vector} v - The 2D vector to set
     * @returns {Vector} The modified vector
     */
    set heading(n: number);
    /**
     * Get the heading of the vector
     * @returns {number} The heading in radians
     */
    get heading(): number;
    /**
     * Get the absolute value of the vector
     * @returns {number} The vector, with all components positive
     */
    get abs(): number;
    /**
     * Get the maximum between this vector and another vector
     * @param {Vector} v - The other vector
     * @returns {Vector} The maximum vector
     */
    max(v: Vector): Vector;
    /**
     * Get the minimum between this vector and another vector
     * @param {Vector} v - The other vector
     * @returns {Vector} The minimum vector
     */
    min(v: Vector): Vector;
    /**
     * Get the dot product between this vector and another vector
     * @param {Vector} v - The other vector
     * @returns {number} The dot product
     */
    dot(v: Vector): number;
    /**
     * Linearly interpolate between this vector and another vector
     * @param {Vector} v - The other vector
     * @returns {Vector} The lerped vector
     */
    lerp(v: Vector, n: any): Vector;
    /**
     * Add a vector to this vector
     * @param {number|Vector} v - The vector to add, or the x component of the vector
     * @param {number} y - The y component of the vector (optional)
     * @param {number} z - The z component of the vector (optional)
     * @returns {Vector} The vector object
     */
    "+="(v: number | Vector, y: number, z: number, ...args: any[]): Vector;
    /**
     * Subtracts a vector from this vector
     * @param {number|Vector} v - The vector to subtract, or the x component of the vector
     * @param {number} y - The y component of the vector (optional)
     * @param {number} z - The z component of the vector (optional)
     * @returns {Vector} The vector object
     */
    "-="(v: number | Vector, y: number, z: number, ...args: any[]): Vector;
    /**
     * Divides this vector by another vector
     * @param {number|Vector} v - The vector to divide by, or the x component of the vector
     * @param {number} y - The y component of the vector (optional)
     * @param {number} z - The z component of the vector (optional)
     * @returns {Vector} The vector object
     */
    "/="(n: any, ...args: any[]): Vector;
    /**
     * Multiplies his vector by another vector
     * @param {number|Vector} v - The vector to multiply by, or the x component of the vector
     * @param {number} y - The y component of the vector (optional)
     * @param {number} z - The z component of the vector (optional)
     * @returns {Vector} The vector object
     */
    "*="(n: any, ...args: any[]): Vector;
    /**
     * Sets this vector to another vector
     * @param {number|Vector} v - The vector to set to, or the x component of the vector
     * @param {number} y - The y component of the vector (optional)
     * @param {number} z - The z component of the vector (optional)
     * @returns {Vector} The vector object
     */
    "="(v: number | Vector, y: number, z: number, ...args: any[]): Vector;
    /**
     * Adds two vectors
     * @param {Vector} v - The vector to add to this one
     * @returns {Vector} The vector object
     */
    "+"(v: Vector): Vector;
    /**
     * Subtracts two vectors
     * @param {Vector} v - The vector to subtract from this one
     * @returns {Vector} The vector object
     */
    "-"(v: Vector): Vector;
    /**
     * Divides two vectors
     * @param {number|Vector} n - The number or vector to divide this one by
     * @returns {Vector} The vector object
     */
    "/"(n: number | Vector): Vector;
    /**
     * Multiplies two vectors
     * @param {Vector} v - The vector to multiply by this one
     * @returns {Vector} The vector object
     */
    "*"(n: any): Vector;
    /**
     * Gets the remainder of two vectors
     * @param {Vector} v - The vector to divide this one by and get the remainder
     * @returns {Vector} The vector object
     */
    "%"(n: any): Vector;
    /**
     * Checks if two vectors are equal
     * @param {Vector} vector - The vector to check against
     * @returns {boolean} If the vectors are equal
     */
    "=="(vector: Vector): boolean;
    /**
     * Converts the vector to a string (x, y, z) or (x, y) if z == 0
     * @returns {string} The stringified vector
     */
    toString(): string;
    /**
     * Converts the vector to a number, equal to the magnitude
     * @returns {Vector} The number-ified vector
     */
    toNumber(): Vector;
}
//# sourceMappingURL=vector.d.ts.map