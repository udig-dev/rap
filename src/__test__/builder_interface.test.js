// @flow
import { iBuilder } from '../builder_interface';
import Car from './example/car';

class CarBuilder implements iBuilder<Car> {
  _make: string;
  _model: string;

  constructor() { }

  /**
   * Get the make of Car.
   *
   * @return {string} make of Car.
   */
  get make() {
    return this._make;
  }
  
  /**
   * Set the make of Car.
   *
   * @param {string} value make of Car.
   */
  set make(value: string) {
    this._make = value;
  }

  /**
   * Get the model of Car.
   *
   * @return {string} model of Car.
   */
  get model() {
    return this._model;
  }

  /**
   * Set the model of Car.
   *
   * @param {string} value model of Car.
   */
  set model(value: string) {
    this._model = value;
  }

  /**
   * Set the make property.
   *
   * @param {string} newMake make.
   * return this.
   */
  withMake(newMake: string) {
    this.make = newMake;
    return this;
  }
  
  /**
   * Set the model property.
   *
   * @param {string} newModel model.
   * return this.
   */
  withModel(newModel: string) {
    this.model = newModel;
    return this;
  }

  build(): Car {

    if (this.make && this.model) {

      const car = new Car();
      car.make = this.make;
      car.model = this.model;
      
      return car;
    } else {

      throw new Error('Cars require both a make and a model.');
    }
  }
}

it('Usage', () => {

  const builder: iBuilder<Car> = new CarBuilder()
    .withMake('Honda')
    .withModel('Insight');

  const aCar: Car = builder.build();
  expect(aCar.make).toBe('Honda');
  expect(aCar.model).toBe('Insight');
});