function sumFibs(input) {
  if (input === 0 || input === 1) return 1;
  let array = [1, 1];
  let upcoming_element = 0;
  while ((upcoming_element = array[0] + array[1]) <= input) {
    array.unshift(upcoming_element);
  }
  return array.filter(element => element % 2 !== 0).reduce((a, b) => a + b);
}

export {
  sumFibs,
};
