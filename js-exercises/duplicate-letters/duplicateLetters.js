
function duplicateLetters(string) {
  const string_arr = string.split('')
  let dup_counter = {}
  for (let i = 0; i < string_arr.length; i++) {
    dup_counter[string_arr[i]] = (dup_counter[string_arr[i]] || 0) + 1
  }
  const max = Math.max(...Object.values(dup_counter))
  return max == 1 ? false : max
}

export {
  duplicateLetters,
};
