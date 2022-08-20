import _ from 'lodash';

/**
 *  Deep diff between two object, using lodash
 *
 *  We are comparing two objects: a and b.
 *  Object b is newer and similar to a.
 *  We are looking for changes from a to b.
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
 * @param  {Object} changed Object compared
 * @param  {Object} original   Object to compare with
 * @return {Object} Return a new object who represent the diff
 */
const diffObj = <T extends object>(changed: T, original: T): Partial<object> => {
  const changes = (object: object, base: object): object =>
    _.transform(
      object,
      (result: any, value: any, key: keyof object) => {
        if (!_.isEqual(value, base[key])) {
          if (_.isArray(value)) {
            result[key] = _.difference(value, base[key]);
          } else if (_.isObject(value) && _.isObject(base[key])) {
            result[key] = changes(value, base[key]);
          } else {
            result[key] = value;
          }
        }
      },
      /* omit accumulator */
    );
  return changes(changed, original);
};

// const getDiff = (changed: any, original: any) => {
//   const accumulator = _.isArray(original) ? [] : {};
//   function recursiveDiff(base: any, object: any, result: any) {
//     for (const key in base) {
//       const value: object = object[key];
//
//       if (!_.isEqual(base[key], value)) {
//         if (_.isArray(value)) {
//           // if array
//           result[key] = [];
//           recursiveDiff(base[key], value, result[key]);
//         } else if (_.isObject(value)) {
//           // if object
//           result[key] = {};
//           recursiveDiff(base[key], value, result[key]);
//         } else {
//           // if value
//           result[key] = value;
//         }
//       }
//     }
//   }
//   recursiveDiff(original, changed, accumulator);
//   return accumulator;
// };

export default diffObj;
