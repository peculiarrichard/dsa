function nonRepeatingCharacter(str) {
  const charCount = {};
  for (const c of str) {
    charCount[c] = charCount[c] ? charCount[c] + 1 : 1;
  }
  for (const c of str) {
    if (charCount[c] === 1) {
      return c;
    }
  }
}