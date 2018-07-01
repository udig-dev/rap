# rap (WIP)
Rap is a library of common design patterns interfaces, and abstract classes.  Rap is built on top of [flow](https://flow.org/en/).  Rap's goal is to provide a consistency when writing Object Oriented JavaScript code.

## Installation
To install Rap run the following command.
```bash
npm i --save rap-flow
```

## Usage

### Adapter
```JavaScript
import { iAdapter } from 'rap-flow';

class stringToJsonAdapter implements iAdapter<string, Object> { // Using iAdapter interface.

  adapt(jsonString: string): Object { // Implement required iAdapter function.

    return JSON.parse(jsonString);
  }
};
```

### Builder
```JavaScript
import { iBuilder } from 'rap-flow';
import Car from './car';

class CarBuilder implements iBuilder<Car> { // Using iBuilder interface.
  _make: string;
  _model: string;
  
  constructor () {}

  get make() {

    return this._make;
  }

  set make(make: string) {

    this._make = make;
  }

  get model() {

    return this._model;
  }

  set model(model: string) {

    this._model = model;
  }

  build(): Car { // Implement mandatory build function.

    if (this.make && this.model) {

      const car = new Car();
      car.make = this.make;
      car.model = this.model;

      return car;
    } else {
      
      throw new Error('Car requires make and model to be set.');
    }
  }
};
```
### Factory
```JavaScript
import { iFactory } from 'rap-flow';
import Car from './car';
import Civic from './car/civic';
import Insight from './car/civic';

class HondaSedanFactory implements iFactory<Car> { // Using iFactory interface.

  build(type: string):  { // Implement mandatory build function.

    switch (type) {
      case 'civic':
        return new Civic();

      case 'Insight':
        return new Insight();

      default:
        throw new Error('Valid type not selected.');
    }
  }
};
```

### Dao
```JavaScript
import { iDao } from 'rap-flow';
import Car from './car';

class CarDao implements iDao<Car> {

  getAll(): Car[] {

    // TODO write IndexDB query.
  }

  getById(id: number): Car {

    // TODO write IndexDB query.
  }

  save(car: Car) {

    // TODO write IndexDB query.
  }

  delete(car: Car | number) {

    // TODO write IndexDB query.
  }
};
```

### Repository
```JavaScript
import { iRepository, iSpecification } from 'rap-flow';
import Car from './car';

class CarRepository implements iRepository<Car> {

  create(car: Car) {

    // TODO write IndexDB query.
  }

  read(specification: iSpecification) {

    // TODO write IndexDB query.
  }

  update(car: Car) {

    // TODO write IndexDB query.
  }

  delete(car: Car) {

    // TODO write IndexDB query.
  }
};

class CarSpecification implements iSpecification {

  toQuery() {

    // TODO write IndexDB query.
  }
};
```