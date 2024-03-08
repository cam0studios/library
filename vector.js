window.Vector = class {
  constructor(x,y,z) {
    if(arguments.length>1) {
      this.type = arguments.length;
      this.x = x;
      this.y = y;
      this.z = this.type>2 ? z : 0;
      return this;
    } else {
      console.error("Error: Vector expected 2 or 3 arguments, not "+arguments.length);
    }
  }
  add(v,y,z) {
    if(arguments.length>1) {
      this.x += v;
      this.y += y;
      this.z += this.type>2 ? z : 0;
    } else {
      this.x += v.x;
      this.y += v.y;
      this.z += this.type>2 ? v.z : 0;
    }
    return this;
  }
  sub(v,y,z) {
    if(arguments.length>1) {
      this.x -= v;
      this.y -= y;
      this.z -= this.type>2 ? z : 0;
    } else {
      this.x -= v.x;
      this.y -= v.y;
      this.z -= this.type>2 ? v.z : 0;
    }
    return this;
  }
  div(n) {
    if (n==0) {
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
  set(v,y,z) {
    if(arguments.length>1) {
      this.x = v;
      this.y = y;
      this.z = this.type>2 ? z : 0;
    } else {
      this.x = v.x;
      this.y = v.y;
      this.z = this.type>2 ? v.z : 0;
    }
    return this;
  }
  rotate(angle,axis) {
    let rot;
    if(this.type==2) {
      rot = this.copy;
    } else {
      if(axis=="x") rot = this.yz;
      if(axis=="y") rot = this.xz;
      if(axis=="z") rot = this.xy;
    }
    let a = rot.heading + angle;
    let m = rot.mag;
    rot.set(Math.cos(a)*m,Math.sin(a)*m);
    if(this.type==2) {
      this.set(rot);
    } else {
      if(axis=="x") this.set(this.x,rot.x,rot.y);
      if(axis=="y") this.set(rot.x,this.y,rot.y);
      if(axis=="z") this.set(rot.x,rot.y,this.z);
    }
    return this;
  }
  
  get mag() {
    return Math.sqrt((this.x*this.x) + (this.y*this.y) + (this.z*this.z));
  }
  get copy() {
    if(this.type>2) return new Vector(this.x,this.y,this.z);
    else return new Vector(this.x,this.y);
  }
  get heading() {
    if(this.type>2) console.warn("Warning: heading is only for 2D vectors"); 
    return Math.atan2(this.y,this.x);
  }
  get abs() {
    if(this.type>2) return new Vector(Math.abs(this.x), Math.abs(this.y), Math.abs(this.z));
    else return new Vector(Math.abs(this.x), Math.abs(this.y), Math.abs(this.z));
  }
  max(v) {
    if(this.type>2) return new Vector(Math.max(this.x,v.x), Math.max(this.y,v.y), Math.max(this.z,v.z));
    else return new Vector(Math.max(this.x,v.x), Math.max(this.y,v.y));
  }
  min(v) {
    if(this.type>2) return new Vector(Math.min(this.x,v.x), Math.min(this.y,v.y), Math.min(this.z,v.z));
    else return new Vector(Math.min(this.x,v.x), Math.min(this.y,v.y));
  }
  dot(v) {
    return this.x*v.x + this.y*v.y + this.z*v.z;
  }
  ndot(v) {
    if(this.type>2) console.warn("Warning: ndot is only for 2D vectors");
    return this.x*v.x - this.y*v.y;
  }
  get xy() {
    if(this.type<3) console.error("Error: xy is only for 3D vectors");
    else return new Vector(this.x,this.y);
  }
  get xz() {
    if(this.type<3) console.error("Error: xz is only for 3D vectors");
    else return new Vector(this.x,this.z);
  }
  get yz() {
    if(this.type<3) console.error("Error: yz is only for 3D vectors");
    else return new Vector(this.y,this.z);
  }

  set mag(n) {
    this.mult(n/this.mag);
    return this;
  }
  set heading(n) {
    if(this.type>2) console.warn("Warning: heading is only for 2D vectors");
    this.rotate(n-this.heading);
    return this;
  }

  static add(v1,v2) {
    let v = v1.copy;
    v.add(v2);
    return v;
  }
  static sub(v1,v2) {
    let v = v1.copy;
    v.sub(v2);
    return v;
  }
  static mult(v,n) {
    let v2 = v.copy;
    v2.mult(n);
    return v2;
  }
  static div(v,n) {
    let v2 = v.copy;
    v2.div(n);
    return v2;
  }
  static rotate(v,angle,axis) {
    let v2 = v.copy;
    v2.rotate(angle,axis);
    return v2;
  }
  static get zero() {
    return new Vector(0,0,0);
  }
}
