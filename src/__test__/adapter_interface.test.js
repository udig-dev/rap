// @flow
import { iAdapter } from '../adapter_interface';
import { it, expect } from 'jest';

class StringToJsonAdapter implements iAdapter<string, Object> {

  adapt(item: string): Object {

    try {

      return JSON.parse(item);
    } catch (err) {

      throw new Error('StringToJsonAdapter failed because input string is not JSON.');
    }
  }
}

it('Usage', () => {

  const adapter: iAdapter<string, Object> = new StringToJsonAdapter();
  const results = adapter.adapt('{"test": "test"}');

  expect(typeof results).toBe('object');
});