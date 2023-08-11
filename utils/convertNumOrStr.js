const convertNumToString = require("./convertNumToString");
const convertStrToNum = require("./convertStrToNum");

function convertNumOrStr(value) {
  let result;
  if (typeof value === "string") {
    result = convertStrToNum(value); //"10" - 10
  } else if (typeof value === "number") {
    result = convertNumToString(value); //10 - "10"
  } else {
    result = null;
  }

  return result;
}

module.exports = convertNumOrStr;
