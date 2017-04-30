// Implement an algorithm to determine if a string has all unique characters. What if you cannot use additional data structures?

function isUnique(str) {
  // total number of chars is 256
  // if string length exceeds 256 then all characters cannot be unique
  if (str.length > 256) return false;

  const charHashMap = [];
  for (let i = 0; i < str.length; i++) {
    let charVal = str.charCodeAt(i);
    if (charHashMap[charVal]) return false;
    charHashMap[charVal] = true;
  }

  return true;
}
