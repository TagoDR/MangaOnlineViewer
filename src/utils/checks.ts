/** biome-ignore-all lint/suspicious/noExplicitAny: must be generic */
/**
 * Checks if a value is "empty".
 * An empty value is `null`, `undefined`, an empty string, an empty array, or an object with no own properties.
 * @example
 * isEmpty(null) // true
 * isEmpty(undefined) // true
 * isEmpty([]) // true
 * isEmpty({}) // true
 * isEmpty('') // true
 * isEmpty(false) // false
 * isEmpty(0) // false
 * isEmpty([{},{"0":false},{"":0},{"0":0}]) // false
 * isEmpty(42) // false
 * isEmpty([{"":1},{"0":1}]) // false
 * @param {any} value - The value to check.
 * @returns {boolean} `true` if the value is empty, `false` otherwise.
 */
function isEmpty<T>(value: T | T[] | undefined): boolean {
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
 * Checks if a value is "nothing" by performing a deep check.
 * A "nothing" value includes falsy values (`null`, `undefined`, `false`, `0`, `''`),
 * empty arrays/objects, or arrays that recursively contain only "nothing" values.
 * Note: The check is recursive for arrays, but for objects, it only considers an object "nothing" if it is empty (`{}`).
 * @example
 * isNothing(null) // true
 * isNothing(undefined) // true
 * isNothing([]) // true
 * isNothing({}) // true
 * isNothing('') // true
 * isNothing(false) // true
 * isNothing(0) // true
 * isNothing([{}, [0, false, '']]) // true
 * isNothing(42) // false
 * isNothing([1]) // false
 * isNothing({ a: 0 }) // false
 * @param {any} value - The value to test.
 * @returns {boolean} `true` if the value is "nothing", `false` otherwise.
 */
function isNothing(value: any): boolean {
  return isEmpty(value) || value === false || value === 0;
}

export { isEmpty, isNothing };
