function checkPermutation(str1, str2) {
  // strings must be same length
  if (str1.length !== str2.length) return false;

  const letterFreqObj = {};
  for (let i = 0; i < str1.length; i++) {
    letterFreqObj[str1[i]] = ++letterFreqObj[str1[i]] || 1;
  }

  for (let i = 0; i < str2.length; i++) {
    if (!letterFreqObj[str2[i]]) return false;
    letterFreqObj[str2[i]]--;
  }

  // if there are no negative values then all values are 0
  return true;

}
