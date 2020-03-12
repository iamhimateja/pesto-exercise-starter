const lastIndexOf = (searchElement, array) => {
  let lastIndex;
  // eslint-disable-next-line guard-for-in
  for (const index in array) {
    if (index < 0) break;
    if (array[index] === searchElement) {
      lastIndex = parseInt(index, 10);
    }
  }
  return lastIndex || -1;

  // using array's lastIndexOf()
  // array.lastIndexOf(searchElement) || -1
};

export {
  lastIndexOf,
};
