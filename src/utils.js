// Check if the value is empty
const isEmpty = R.either(R.isNil, R.isEmpty);

const mapIndexed = R.addIndex(R.map);

export {
  isEmpty,
  mapIndexed,
};
