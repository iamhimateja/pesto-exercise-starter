function isTriangle(v1, v2, v3) {
  if ((v1 + v2 > v3) && (v2 + v3 > v1) && (v3 + v1 > v2)) {
    return true
  }
  return false
}

export {
  isTriangle,
};
