/** biome-ignore-all lint/suspicious/noExplicitAny: must be generic */
import _ from 'lodash';

/**
 *  Deep diff between two object, using lodash
 *
 *  We are comparing two objects: A and B.
 *  Object b is newer and similar to A.
 *  We are looking for changes from A to B.
 *  We assume that data types haven't changed (String to Number).
 *  We assume that parent is either an Array or an Object.
 *
 *  This is the "easier on the programmer, harder on the computer" method.
 *  It's very inefficient. Worst case is something like O(n^n).
 *  But this works, is easier to understand that the "correct"
 *  implementation, and entertained me for a bit. *
 *
 * http://stackoverflow.com/questions/31295545/how-to-get-only-the-changed-values-from-two-json-objects
 * https://gist.github.com/Yimiprod/7ee176597fef230d1451
 * https://stackoverflow.com/questions/8572826/generic-deep-diff-between-two-objects
 * https://qastack.com.br/programming/31683075/how-to-do-a-deep-comparison-between-2-objects-with-lodash
 *
 * @template T - The type of the objects being compared.
 * @param {T} changed - The object with potential changes.
 * @param {T} original - The original object to compare against.
 * @returns {Partial<Record<string, unknown>>} A new object representing the difference.
 */
const diffObj = <T extends Record<string, unknown>>(
  changed: T,
  original: T,
): Partial<Record<string, unknown>> => {
  const changes = (
    object: Record<string, unknown>,
    base: Record<string, unknown>,
  ): Record<string, unknown> =>
    _.transform(
      object,
      (result: any, value: any, key: keyof Record<string, unknown>) => {
        if (!_.isEqual(value, base[key])) {
          if (_.isObject(value) && _.isObject(base[key]) && !_.isArray(value)) {
            // @ts-expect-error
            result[key] = changes(value, base[key]);
          } else {
            result[key] = value;
          }
        }
      },
      /* Omit accumulator */
    );
  return changes(changed, original);
};

/**
 * An alternative function to deeply diff two objects or arrays.
 * It recursively compares the `changed` object/array against the `original` and returns a new object/array containing only the changed values.
 *
 * @param {any} changed - The object or array with potential changes.
 * @param {any} original - The original object or array to compare against.
 * @returns {any} A new object or array representing the differences.
 */
export const getDiff = (changed: any, original: any) => {
  const accumulator = _.isArray(original) ? [] : {};

  /**
   * Recursively compares properties and populates the result.
   * @internal
   */
  function recursiveDiff(base: any, object: any, result: any) {
    for (const key in base) {
      const value: Record<string, unknown> = object[key];

      if (!_.isEqual(base[key], value)) {
        if (_.isArray(value)) {
          // If array
          result[key] = [];
          recursiveDiff(base[key], value, result[key]);
        } else if (_.isObject(value)) {
          // If object
          result[key] = {};
          recursiveDiff(base[key], value, result[key]);
        } else {
          // If value
          result[key] = value;
        }
      }
    }
  }

  recursiveDiff(original, changed, accumulator);
  return accumulator;
};

export default diffObj;
