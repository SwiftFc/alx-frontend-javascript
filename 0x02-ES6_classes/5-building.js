class Building {
    constructor(sqft) {
      this._sqft = this.validateNumber(sqft, 'Square Feet');
    }
  
    // Getter for sqft
    get sqft() {
      return this._sqft;
    }
  
    // Abstract method to be implemented by subclasses
    evacuationWarningMessage() {
      throw new Error('Class extending Building must override evacuationWarningMessage');
    }
  
    // Helper function to validate number type
    validateNumber(value, attributeName) {
      if (typeof value !== 'number' || isNaN(value)) {
        throw new TypeError(`${attributeName} must be a number`);
      }
      return value;
    }
  }
  
  export default Building;
