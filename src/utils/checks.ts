/* eslint-disable @typescript-eslint/no-explicit-any */
/**
 * Checks if a JavaScript value is empty
 * @example
 * isEmpty(null) // true
 * isEmpty(undefined) // true
 * isEmpty([]) // true
 * isEmpty({}) // true
 * isEmpty("") // true
 * isEmpty(false) // false
 * isEmpty(0) // false
 * isEmpty([{},{"0":false},{"":0},{"0":0}]) // false
 * isEmpty(42) // false
 * isEmpty([{"":1},{"0":1}]) // false
 * @param {any} value - item to test
 * @returns {boolean} true if empty, otherwise false
 */
function isEmpty<T>(value: T | T[] | undefined): value is undefined {
  return (
    value === null || // Check for null
    typeof value === 'undefined' ||
    value === undefined || // Check for undefined
    (typeof value === 'string' && value === '') || // Check for empty string
    (Array.isArray(value) && value.length === 0) || // Check for empty array
    (typeof value === 'object' && Object.keys(value).length === 0)
  );
}

/**
 * Checks if value is nothing. Deep-checks arrays and objects
 * @example
 * isNothing(null) // true
 * isNothing(undefined) // true
 * isNothing([]) // true
 * isNothing({}) // true
 * isNothing("") // true
 * isNothing(false) // true
 * isNothing(0) // true
 * isNothing([{},{"0":false},{"":0},{"0":0}]) // true
 * isNothing(42) // false
 * isNothing([{"":1},{"0":1}]) // false
 * @param {any} value - item to test
 * @returns {boolean} true if nothing, otherwise false
 */
function isNothing(value: any): value is undefined {
  const isEmptyObject = (a: any): boolean => {
    if (!Array.isArray(a)) {
      // It's an Object, not an Array
      const hasNonempty = Object.keys(a).some(element => !isNothing(a[element]));
      return hasNonempty ? false : isEmptyObject(Object.keys(a));
    }

    // Check if array is really not empty as JS thinks at least one element should be non-empty
    return !a.some(element => element instanceof Promise || !isNothing(element));
  };

  return (
    !value || value === 0 || isEmpty(value) || (typeof value === 'object' && isEmptyObject(value))
  );
}

export { isEmpty, isNothing };
