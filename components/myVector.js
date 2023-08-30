class MyVector {
    constructor(x, y, z) {
      this.x = x;
      this.y = y;
      this.z = z;
    }
  
    add(other) {
      const newX = this.x + other.x;
      const newY = this.y + other.y;
      const newZ = this.z + other.z;
  
      return new MyVector(newX, newY, newZ);
    }
  
    scale(scalar) {
      const newX = this.x * scalar;
      const newY = this.y * scalar;
      const newZ = this.z * scalar;
  
      return new MyVector(newX, newY, newZ);
    }
  
    static isUnitVector(vector) {
      return vector.magnitude() === 1;
    }
  
    magnitude() {
      const newX = this.x * this.x;
      const newY = this.y * this.y;
      const newZ = this.z * this.z;
  
      return Math.sqrt(newX + newY + newZ);
    }
  
    dotProduct(other) {
      const newX = this.x * other.x;
      const newY = this.y * other.y;
      const newZ = this.z * other.z;
  
      return newX + newY + newZ;
    }
  
    crossProduct(other) {
      const newX = this.y * other.z - other.y * this.z;
      const newY = this.x * other.z - other.x * this.z;
      const newZ = this.x * other.y - other.x * this.y;
  
      return new MyVector(newX, -newY, newZ);
    }
  
    static areParallel(vector1, other) {
      const vector = vector1.crossProduct(other);
      return vector.x === 0 && vector.y === 0 && vector.z === 0;
    }
  
    static isOrthogonal(num) {
      return num === 0;
    }
  
    print() {
      console.log(`(${this.x}, ${this.y}, ${this.z})`);
    }
  
    static printNumber(num) {
      console.log(num);
    }
  
    static printBoolean(bool) {
      console.log(bool);
    }
  }
  
  export default MyVector;
  