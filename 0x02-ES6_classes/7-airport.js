class Airport {
    constructor(name, code) {
      this._name = this.validateString(name, 'Name');
      this._code = this.validateString(code, 'Code');
    }
  
    // Getter for name
    get name() {
      return this._name;
    }
  
    // Getter for code
    get code() {
      return this._code;
    }
  
    // Custom toString method
    toString() {
      return `[object ${this._code}] { _name: '${this._name}', _code: '${this._code}' }`;
    }
  
    // Helper function to validate strings
    validateString(value, fieldName) {
      if (typeof value !== 'string' || value.trim() === '') {
        throw new TypeError(`${fieldName} must be a non-empty string.`);
      }
      return value.trim();
    }
  }
  
  export default Airport;
