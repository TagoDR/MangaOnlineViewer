// Check if the value is empty
const isEmpty = R.either(R.either(R.isNil, R.isEmpty),
  R.either(x => R.length(x) === 0, x => x === 0));

const mapIndexed = R.addIndex(R.map);

export {
  isEmpty,
  mapIndexed,
};
