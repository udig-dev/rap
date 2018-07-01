// @flow
import { iFactory } from '../factory_interface';
import Car from './example/car';

class Civic extends Car {

  constructor() {
    super();
    this.make = 'Honda';
    this.model = 'Civic';
  }
}

class Insight extends Car {

  constructor() {
    super();
    this.make = 'Honda';
    this.model = 'Insight';
  }
}

class CarFactory implements iFactory<string, Car> {

  build(type: string): Car {

    switch (type) {
      case 'civic':
        return new Civic();

      case 'Insight':
        return new Insight();

      default:
        throw new Error('Valid type not selected.');
    }
  }
}

it('Usage', () => {

  const factory: iFactory<string, Car> = new CarFactory();
  const car = factory.build('civic');

  expect(car.make).toBe('Honda');
  expect(car.model).toBe('Civic');
});