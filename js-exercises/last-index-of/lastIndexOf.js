const lastIndexOf = (searchElement, array) => {
  let lastIndex;
  // for..in will loop through all indexes including any invalid ones
  for(let index = 0; index < array.length; index++) {
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
