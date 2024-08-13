/**
 * Returns the n-th Fibonacci number
 * @param n a non-negative integer, indicating which Fibonacci number to return
 * @returns 0 if n = 0, 1 if n = 1, and the sum of the previous two Fibonacci
 *    numbers otherwise
 */
export const fib = (n: bigint): bigint => {
  if (n < 0n) {
    throw new Error('n must be non-negative');
  } else if (n === 0n) {
    return 0n;
  } else if (n === 1n) {
    return 1n;
  } else {
    return fib(n - 1n) + fib(n - 2n);
  }
};