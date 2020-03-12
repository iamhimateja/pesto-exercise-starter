const deepCopyObject = objToCopy => {
  let copyObject; let value;
  if (typeof objToCopy !== 'object' || objToCopy === null) {
    return objToCopy;
  }

  // eslint-disable-next-line prefer-const
  copyObject = Array.isArray(objToCopy) ? [] : {};

  // eslint-disable-next-line guard-for-in
  for (const key in objToCopy) {
    value = objToCopy[key];
    copyObject[key] = typeof value === 'object' || value !== null ? deepCopyObject(value) : value;
  }

  return copyObject;
};

export { deepCopyObject };
