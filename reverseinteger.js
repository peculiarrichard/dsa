var reverse = function(x) {
  const reversed = x.toString().split('').reverse().join('')
  const result = x < 0 ? parseInt(reversed) * -1 : parseInt(reversed)
  return result > Math.pow(2, 31) - 1 || result < Math.pow(-2, 31) ? 0 : result
};