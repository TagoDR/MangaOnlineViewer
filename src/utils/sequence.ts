function indexList(repeat: number, begin: number = 1) {
  return Array(repeat)
    .fill(0)
    .map((_, i) => i + 1)
    .filter((i) => i >= begin);
}

export default indexList;
