const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (!(members instanceof Array)) return false
  let resultArr = []
  members.forEach(element => {
    if (typeof element === "string"){
      resultArr.push(element.trim()[0].toUpperCase())
    }
  });
  return resultArr.sort().join('')
};
