function MissingDigit(str) {
  let [left, right] = str.split('=');
  let operator = left.includes('+') ? '+' : left.includes('-') ? '-' : left.includes('*') ? '*' : '/';
  left = left.split(operator).map(n => n.includes('x') ? null : Number(n));
  right = Number(right);

  for (let i = 0; i < 10; i++) {
    let num = 0;
    if (left[0] !== null) {
      num = left[0];
      if (operator === '+') num += left[1];
      else if (operator === '-') num -= left[1];
      else if (operator === '*') num *= left[1];
      else if (operator === '/') num /= left[1];
    } else if (left[1] !== null) {
      num = left[1];
      if (operator === '+') num = left[0] + num;
      else if (operator === '-') num = left[0] - num;
      else if (operator === '*') num = left[0] * num;
      else if (operator === '/') num = left[0] / num;
    } else if (left[2] !== null) {
      num = left[2];
      if (operator === '+') num = right - left[2];
      else if (operator === '-') num = left[2] - right;
      else if (operator === '*') num = right / left[2];
      else if (operator === '/') num = left[2] / right;
    }
    if (num === i) return i;
  }
}
