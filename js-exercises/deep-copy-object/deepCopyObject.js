const deepCopyObject = objToCopy => {
  let copyObject, value, key;

  if(typeof objToCopy !== "object" || objToCopy === null) {
    return objToCopy
  }

  copyObject = Array.isArray(objToCopy) ? [] : {}

  for(key in objToCopy) {
    value = objToCopy[key]
     copyObject[key] = typeof value === "object" || value !== null ? deepCopyObject(value) : value
  }

  return copyObject
};

export { deepCopyObject };