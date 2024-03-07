# Library
Libraries including vectors.

## Documentation
f(a,b,[c])     c is optional\
  'number'.f()   don't literally write number\
  = f()          use the return value\
  v = n          setter\

### VECTORS :
  = new Vector(x,y,[z])           returns a vector\
  'vector'.add(x,y,[z])           adds x, y, and z to a vector\
  'vector'.add(v)                 adds a vector to a vector\
  'vector'.sub(x,y,[z])           subtracts x, y, and z from a vector\
  'vector'.sub(v)                 subtracts a vector from a vector\
  'vector'.mult(n)                multiplies a vector by a value\
  'vector'.div(n)                 divides a vector by a non-zero value\
  'vector'.set(x,y,[z])           sets a vector to x, y and z\
  'vector'.set(v)                 sets a vector to another vector\
  'vector'.rotate(angle, [axis])  rotates a vector by an angle, 2d vectors don't need axis

  = 'vector'.mag                  magnitude of the vector\
  = 'vector'.heading              heading of the vector, for 3D vectors ignores the z-component\
  = 'vector'.copy                 copy of the vector

  'vector'.mag = n                sets magnitude of the vector\
  'vector'.heading = n            sets heading of the vector
  
  Vector.add(v1,v2)               static, adds 2 vectors\
  Vector.sub(v1,v2)               static, subtracts a vector from a vector\
  Vector.mult(v,n)                static, multiplies vector by a number\
  Vector.div(v,n)                 static, divides a vector by a number\
  Vector.rotate(v,angle,[axis])   static, rotates a vector
