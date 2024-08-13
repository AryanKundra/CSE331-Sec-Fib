import * as assert from 'assert';
import { fib } from './fib';


describe('fib', function() {

  it('fib', function() {
    assert.strictEqual(fib(0n), 0n);
    assert.strictEqual(fib(1n), 1n);
    assert.strictEqual(fib(2n), 1n);
    assert.strictEqual(fib(3n), 2n);
    assert.strictEqual(fib(11n), 89n);
  });

});