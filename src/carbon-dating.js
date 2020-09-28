const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15;
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  if (typeof sampleActivity !== 'string') return false
  let N = parseFloat(sampleActivity)
  if (isNaN(N) || N > MODERN_ACTIVITY || N <= 0) return false
  let k = 0.693 / HALF_LIFE_PERIOD
  return Math.ceil(Math.log(MODERN_ACTIVITY / N) / k)
};