# Library
Libraries including vectors.

## Documentation
f(a,b,[c])     c is optional\
  'number'.f()   don't literally write number\
  = f()          use the return value\
  v = n          setter\

### Vectors :
  = new Vector(x,y,[z])           returns a vector\
  'vector'.add(x,y,[z])           adds x, y, and z to a vector\
  'vector'.add(v)                 adds a vector to a vector\
  'vector'.sub(x,y,[z])           subtracts x, y, and z from a vector\
  'vector'.sub(v)                 subtracts a vector from a vector\
  'vector'.mult(n)                multiplies a vector by a value\
  'vector'.div(n)                 divides a vector by a non-zero value\
  'vector'.set(x,y,[z])           sets a vector to x, y and z\
  'vector'.set(v)                 sets a vector to another vector\
  'vector'.rotate(angle, [axis])  rotates a vector by an angle, if not provided axis is z

  = 'vector'.mag                  magnitude of the vector\
  = 'vector'.heading              heading of the vector, for 3D vectors ignores the z-component\
  = 'vector'.copy                 copy of the vector\
  = 'vector'.xy                   gets a 2D vector made of the x and y components\
  = 'vector'.xz                   gets a 2D vector made of the x and z components\
  = 'vector'.yz                   gets a 2D vector made of the y and Z components

  'vector'.mag = n                sets magnitude of the vector\
  'vector'.heading = n            sets heading of the vector
  
  Vector.add(v1,v2)               static, adds 2 vectors\
  Vector.sub(v1,v2)               static, subtracts a vector from a vector\
  Vector.mult(v,n)                static, multiplies vector by a number\
  Vector.div(v,n)                 static, divides a vector by a number\
  Vector.rotate(v,angle,[axis])   static, rotates a vector

### Intersections :
  = linePointCollision(l1, l2, p)      gets if a line from l1 to l2 and a point p are intersecting\
  = lineClosestPoint(l1, l2, p)        gets the closest point on a line from l1 to l2 from a point p\
  = lineCircleCollision(l1, l2, c, r)  gets if a line from l1 to l2 and a circle c with radius r are intersecting
