export const add = (a: number, b: number) => a + b;
export const minus = (a: number, b: number) => a - b;

export function operate(a: number, b: number, operation: '+' | '-') {
  return operation === '+' ? add(a, b) : minus(a, b);
}
