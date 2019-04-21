import {add3}  from '../src/mylib';
import * as assert from 'power-assert';

describe('add3', () => {
  it('should sum up three numbers', () => {
    assert.strictEqual(add3(1, 2, 3), 6);
  });
});
