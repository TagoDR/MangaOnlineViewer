/**
 * Generates a sequence of numbers as an array.
 * @param {number} repeat - The end number of the sequence (inclusive).
 * @param {number} [begin=1] - The starting number of the sequence (inclusive).
 * @returns {number[]} An array of numbers representing the sequence.
 * @example
 * sequence(5, 1) // returns [1, 2, 3, 4, 5]
 * sequence(5, 3) // returns [3, 4, 5]
 * sequence(3)    // returns [1, 2, 3]
 */
function sequence(repeat: number, begin = 1): number[] {
  return Array(repeat)
    .fill(0)
    .map((_, i) => i + 1)
    .filter(i => i >= begin);
}

export default sequence;
