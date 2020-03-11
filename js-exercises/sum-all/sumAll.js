function sumAll(array) {
  const sorted_array = array.sort((a, b) => a - b);
  let start = sorted_array[0];
  let end = sorted_array[1];
  let total = 0
  while (start <= end) {
    total+=start
    start++
  }

  return total;
}

export {
  sumAll,
};
