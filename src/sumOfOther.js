module.exports = function sumOfOther(array) {
  let sum = array.reduce((acc, cur) => acc + cur)
  return array.map(cur => sum - cur);
}