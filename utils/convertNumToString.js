function convertNumToString(num) {
  if (Number.isInteger(num) === false) {
    return null;
  }
  //   if (typeof num !== "number") {
  //     console.log("Это не цифра");
  //     return null;
  //   }
  const convertedNum = num.toString(); //5 = "5"
  return convertedNum; //return "5"
}

// const resultNum = convertNumToString(10); //resultNum = "10"
// const resultNum2 = convertNumToString({ name: "Sasha" });
// // console.log(typeof resultNum);
// // console.log(typeof 10);
// // typeof - узнать тип данных

// console.log(resultNum2); //output - null
// if (resultNum2 === null) {
//   console.log("Это не цифра");
// }

module.exports = convertNumToString;
