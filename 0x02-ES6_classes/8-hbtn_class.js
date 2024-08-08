class HolbertonClass {
    constructor(size, location) {
      this._size = this.validateNumber(size, 'Size');
      this._location = this.validateString(location, 'Location');
    }
  
    // Getter for size
    get size() {
      return this._size;
    }
  
    // Getter for location
    get location() {
      return this._location;
    }
  
    // Custom Number casting
    valueOf() {
      return this._size;
    }
  
    // Custom String casting
    toString() {
      return this._location;
    }
  
    // Helper function to validate numbers
    validateNumber(value, fieldName) {
      if (typeof value !== 'number' || isNaN(value)) {
        throw new TypeError(`${fieldName} must be a valid number.`);
      }
      return value;
    }
  
    // Helper function to validate strings
    validateString(value, fieldName) {
      if (typeof value !== 'string' || value.trim() === '') {
        throw new TypeError(`${fieldName} must be a non-empty string.`);
      }
      return value.trim();
    }
  }
  
  export default HolbertonClass;
