const cloneCarSymbol = Symbol('cloneCarSymbol');

export default class Car {
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  cloneCar() {
    const clonedCar = new this.constructor();
    for (const key of Object.keys(this)) {
      if (this[key] !== undefined && key !== '_cloneCarSymbol') {
        clonedCar[key] = this[key];
      }
    }
    return clonedCar;
  }
}

Object.defineProperty(Car.prototype, 'cloneCar', {
  value: Car.prototype.cloneCar,
  enumerable: false,
  writable: true,
});

Object.defineProperty(Car.prototype, '_cloneCarSymbol', {
  value: cloneCarSymbol,
  enumerable: false,
  writable: true,
});
