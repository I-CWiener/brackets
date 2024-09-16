const config1 = [['(', ')']];
const config2 = [['(', ')'], ['[', ']']];
const config3 = [['(', ')'], ['[', ']'], ['{', '}']];
const config4 = [['|', '|']];
const config5 = [['(', ')'], ['|', '|']];
const config6 = [['1', '2'], ['3', '4'], ['5', '6'], ['7', '7'], ['8', '8']];
const config7 = [['(', ')'], ['[', ']'], ['{', '}'], ['|', '|']];
module.exports = function check(str, bracketsConfig) {
  const arr = [];

  const brackets = new Map(bracketsConfig);
console.log(brackets);

  for (const br of str) {
      console.log(bracket);
    if (br === brackets.get(arr[arr.length - 1])) {
      arr.pop();
      console.log(arr)
    } else {
      arr.push(br);
      console.log(arr);
    }
  }
console.log(arr.length === 0);
  return arr.length === 0;
}
