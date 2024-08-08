import Car from './10-car.js';

export default class EVCar extends Car {
  constructor(brand, motor, color, range) {
    super(brand, motor, color);
    this._range = range;
  }

  cloneCar() {
    const clonedCar = new Car();
    for (const key of Object.keys(this)) {
      if (this[key] !== undefined && key !== '_cloneCarSymbol') {
        clonedCar[key] = this[key];
      }
    }
    return clonedCar;
  }
}
