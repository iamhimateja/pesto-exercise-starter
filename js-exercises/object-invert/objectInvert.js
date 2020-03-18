function objectInvert(inputObject) {
  const outputObject = {};
  // eslint-disable-next-line guard-for-in
  for (const key in inputObject) {
    outputObject[inputObject[key]] = key;
  }
  return outputObject;
}

export {
  objectInvert,
};
