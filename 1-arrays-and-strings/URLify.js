function urlify(str, trueLength) {
  const strArr = str.slice(0, trueLength).split('');
  for (let i = 0; i < trueLength; i++) {
    if (strArr[i] === ' ') {
      strArr[i] = '%20';
    }
  }

  return strArr.join('');
}
