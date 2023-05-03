function lengthOfLongestSubstring(s) {
  let max = 0;
  let set = new Set();
  let i = 0;
  let j = 0;

  while (i < s.length && j < s.length) {
    if (!set.has(s[j])) {
      set.add(s[j++]);
      max = Math.max(max, j - i);
    } else {
      set.delete(s[i++]);
    }
  }

  return max;
}