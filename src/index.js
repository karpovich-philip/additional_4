module.exports = function multiply(first, second){
  var result = [];

  for (var i = 0; i < first.length; i++) {
    for (var j = 0; j < second.length; j++) {
      var lenF = first.length;
      var lenS = second.length;
      var prevEl = (lenF - i) + (lenS - j);
      var lastEl = prevEl + 1;
      var mul = first[(lenF - 1) - i] * second[(lenS - 1) - j];
      var sum = mul + (result[lastEl] || 0);

      result[prevEl] = (result[prevEl]||0) + Math.floor(sum / 10); //
      result[lastEl] = sum % 10;
    }
  }

  result = result.slice(2);

  if (result[0] === 0) {
    result = result.slice(1);
  }

  return result.join('');

}