function updateObject(replaceIndex, element, array) {
  array.splice(replaceIndex, 1, element);
  return array;
}

export {
  updateObject,
};
