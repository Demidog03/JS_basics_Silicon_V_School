function convertStrToNum(str) {
  if (typeof str !== "string") {
    return null;
  }
  return Number(str); //"10" - 10
}

// console.log(convertStrToNum("800"));

// console.log(Number("Sasha"));
// // NaN - Not a number

module.exports = convertStrToNum;
