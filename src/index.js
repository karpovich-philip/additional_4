module.exports = function multiply(first, second){
  let result = [];

  for (let i = 0; i < first.length; i++) {
    for (let j = 0; j < second.length; j++) {
      let lenF = first.length;
      let lenS = second.length;
      let prevEl = (lenF - i) + (lenS - j);
      let lastEl = prevEl + 1;
      let mul = first[(lenF - 1) - i] * second[(lenS - 1) - j];
      let sum = mul + (result[lastEl] || 0);

      result[prevEl] = (result[prevEl]||0) + Math.floor(sum / 10);
      result[lastEl] = sum % 10;
    }
  }
  result = result.slice(2);
  if (result[0] === 0) {
    result = result.slice(1);
  }
  return result.join('');
}