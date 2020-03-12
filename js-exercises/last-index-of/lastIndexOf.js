const lastIndexOf = (searchElement, array) => {
  let lastIndex;
  for (const index in array) {
    if (index < 0) break;
    if (array[index] === searchElement) {
      lastIndex = parseInt(index);
    }
  }
  return lastIndex || -1;

  // using array's lastIndexOf()
  // array.lastIndexOf(searchElement) || -1
};

export {
  lastIndexOf,
};
