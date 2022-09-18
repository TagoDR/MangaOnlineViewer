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
function isEmpty<T>(value: T | T[] | null | undefined): value is null | undefined {
  return (
    value === null || // check for null
    typeof value === 'undefined' ||
    value === undefined || // check for undefined
    (typeof value === 'string' && value === '') || // check for empty string
    (Array.isArray(value) && value.length === 0) || // check for empty array
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
function isNothing(value: any | any[] | null | undefined): value is null | undefined {
  const isEmptyObject = (a: any | any[] | null | undefined): boolean => {
    if (!Array.isArray(a)) {
      // it's an Object, not an Array
      const hasNonempty = Object.keys(a).some((element) => !isNothing(a[element]));
      return hasNonempty ? false : isEmptyObject(Object.keys(a));
    }
    // check if array is really not empty as JS thinks at least one element should be non-empty
    return !a.some(
      (element) => !isNothing(element), //
    );
  };
  return (
    // eslint-disable-next-line eqeqeq
    value == false ||
    value === 0 ||
    isEmpty(value) ||
    (typeof value === 'object' && isEmptyObject(value))
  );
}

// function testUtil(test: any, fn: any) {
//   test.map((value: any) => console.log(`${fn.name}(${JSON.stringify(value)}) // ${fn(value)}`));
// }
//
// const testValues = [
//   null,
//   undefined,
//   [],
//   {},
//   '', // Should be Empty and Nothing
//   false,
//   0,
//   [{}, { 0: false }, { '': 0 }, { 0: 0 }], // Should be Nothing
//   42,
//   [{ '': 1 }, { 0: 1 }], // Should be Something
// ];
// testUtil(testValues, isEmpty);
// testUtil(testValues, isNothing);

export { isEmpty, isNothing };
