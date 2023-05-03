function MinWindowSubstring(strArr) {
  const [N, K] = strArr;
  const required = {};
  for (const c of K) {
    required[c] = required[c] ? required[c] + 1 : 1;
  }
  const window = {};
  let left = 0, right = 0;
  let remaining = Object.keys(required).length;
  let minLen = Infinity, minWindow = '';
  while (right < N.length) {
    const c = N[right];
    if (required[c]) {
      window[c] = window[c] ? window[c] + 1 : 1;
      if (window[c] === required[c]) {
        remaining--;
      }
    }
    right++;
    while (remaining === 0) {
      if (right - left < minLen) {
        minLen = right - left;
        minWindow = N.slice(left, right);
      }
      const c = N[left];
      if (required[c]) {
        window[c]--;
        if (window[c] < required[c]) {
          remaining++;
        }
      }
      left++;
    }
  }
  return minWindow;
}
