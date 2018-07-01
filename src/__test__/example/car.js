/**
 * Car class for example purposes.
 */
export default class Car {
  _make: ?string;
  _model: ?string;

  constructor() {
    this._make = undefined;
    this._model = undefined;
  }

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
}