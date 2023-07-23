//let, var, const - Создание переменных (обьявление)
//Как комментировать - "//", "/* */"

//1
/*let name;
name = 'Olzhas'; //Присваивание значении переменной
*/

//2
/*let name = "Olzhas";
console.log(name); //выводить значение в консоль
name = "Madina";
console.log(name);
name = 15;
console.log(name);*/
// name = "Sasha";

/*ТИПЫ ДАННЫХ*/
/*String, Number, Object, Boolean, Array*/
/*let string = "Hello, I am string";
let num = 10;
let student = {
  name: "Olzhas",
  surname: "Otep",
  age: 19,
};
let bool = true; //false
let arr = ["Sasha", "Olzhas", "Madina"];*/

/*РАБОТА С БРАУЗЕРОМ*/
/*alert("Привет МИР!");
let answer = prompt("Введите имя: "); //всегда сохраняет текст (string)
console.log(80);*/

/*ПРАКТИКА 1*/
/*let name, surname, age, education, averageGPA, dateOfBirth;
name = prompt("Ваше имя?");
surname = prompt("Ваша фамилия?");
age = prompt("Ваш возраст?");
education = prompt("Ваше образование?");
averageGPA = prompt("Средний GPA");
dateOfBirth = prompt("Дата рождения?");

console.log("Ваше полное имя: " + name + " " + surname);*/
// Ваше полное имя: Отеп Олжас

// console.log("Ваше имя: " + name);
// console.log("Ваша фамилия: " + surname);
/*console.log("Ваш возраст: " + age);
console.log("Ваше образование: " + education);
console.log("Ваше средний GPA: " + averageGPA);
console.log("Дата рождения: " + dateOfBirth);*/

/*СЛИЯНИЕ ТЕКСТОВ*/
// console.log("Ма" + "дина");
// console.log("Саша" + " " + "когда сделаешь портфолио?");

//console.log("Какой то текст", "еще какой то текст");
//console.log("Возрастной рейтинг:", 13);

/*ОБРАТНЫЕ КАВЫЧКИ*/
// let username = "SashaMashina007";
// let level = 5;

// console.log(
//   "Дорогой, " + username + " поздравляю вы достигли " + level + " - уровня!!!"
// );

// console.log(`Дорогой, ${username} поздравляю вы достигли ${level} - уровня!!!`);

/*NUMBER*/
// let num = 5 + 5;
// console.log(num);

/*АРИФМЕТИЧЕСКИЙ ОПЕРАТОРЫ*/
//  + - плюс
//  - - минус
//  / - деление
//  * - умножение
//  % - модуль (остаток)
//  ** - степень
// console.log(12 % 5);
// console.log(5 ** 3);


/** NUMBERS AND BOOLEAN */
/*CONST AND LET*/
// let num = 5
// const num2 = 15
// num=10
// num2=16

// true = истина
// false = ложь

/*ОПЕРАТОРЫ СРАВНЕНИЯ*/
// > - больше
// < - меньше
// >= - больше или равно
// <= - меньше или равно
// == - равно
// === - ультра равно
//!= - не равно
//!== - ультра не равно


//console.log(5 != 5) /*проверка на равность*/
//console.log(5!=="5")c

//let isSashaGirl = false
//let hasSashaBall = false

//! - инверсия (не что то)
//console.log(false != !false) //false != true

/*ЛОГИЧЕСКИЕ ОПЕРАТОРЫ*/

//&& - И
//|| - ИЛИ
// console.log(true && true) //true
// console.log(true && false) //false
// console.log(false && true) //false
// console.log(false && false) //false
//
// console.log("--------------")
// console.log(true || true) //true
// console.log(true || false) //true
// console.log(false || true) //true
// console.log(false || false) //false

/*ПРИМЕР СРАВНЕНИЯ + ЛОГИКА*/
const age = prompt("Введите ваш возраст")
// const height = prompt("Ваш рост: ")
// const gender = prompt("Ваш гендер: ")
// const race = prompt("Ваш раса: ")

/*Проверка на то чтобы пить алкоголь*/
//const canPersonDrink = (age > 0 && age >= 21)
//console.log("Можно пить: " + canPersonDrink)

// if(age>0 && age>=21){ //if(true){}
//     console.log("Вам можно пить")
// }
// else if(age<0){ //else if(-5<0) else if(true)
//     console.log("Самый умный?")
// }
// else{
//     console.log("Увы, вам нельзя пить")
// }

/*ПРИМЕР С ВЛОЖЕННЫМИ УСЛОВИЯМИ*/
// if(gender==="male"){
//     console.log("Ура вы Мужчина")
//     if(weight>=70 && weight<=95){
//         console.log("Вам можно на конкурс")
//     }
//     else{
//         console.log("Вам нельзя")
//         if(weight < 70){
//             console.log("Вы слишком худой")
//         }
//         else if(weight > 95){
//             console.log("Вы слишком полный")
//         }
//     }
// }
// else if(gender==="female"){
//     console.log("Ура вы Женщина")
//     if(weight>=55 && weight<=75){
//         console.log("Вам можно на конкурс")
//     }
//     else{
//         console.log("Вам нельзя")
//         if(weight < 70){
//             console.log("Вы слишком худая")
//         }
//         else if(weight > 95){
//             console.log("Вы слишком полная")
//         }
//     }
// }
// else{
//     console.log("Зачилься")
// }


//
// /*Проверка на подростка*/
// const isPersonAdolescent = (age >= 13 && age < 20) //5>=13 && 5<20 false && true
// //Промежуток (интервал) - &&
// console.log("Является подростком: " + isPersonAdolescent)
//
// /*Проверка на модель (девушки)*/
// const isPersonModel = (
//     (height>=175 && height<=183)
//     &&
//     (gender==="Женщина" || gender==="женщина" || gender==="девушка")
//     &&
//     race==="Афро")
// console.log("Вы модель: " + isPersonModel)


