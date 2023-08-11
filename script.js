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
//const age = prompt("Введите ваш возраст")
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

/** ЦИКЛЫ */
/** Тернарный оператор */
// const age = 17;

// let result = ""
// if(age >= 18){
//     result = "Вы совершеннолетний"
// }
// else {
//     result = "Вы не совершеннолетний"
// }
// console.log(result)

/*******/
// age >= 18 ? console.log("Вы совершеннолетний") : console.log("Вы не совершеннолетний")
// const result = age >=18 ? "Вы совершеннолетний" : "Вы не совершеннолетний"
// console.log(result)

//Практика
// let country = "Kazakhstan"
// let access;
//
// if(country==="Kazakhstan"){
//     access=true
// }
// else {
//     access=false
// }

/*Превратить в тернарный оператор*/
// let country = "Kazakhstan"
// const access = (country === "Kazakhstan") ? true : false

/**Циклы*/
// console.log("Привет Мадина")

/*ЦИЛК For*/
// i = 0;
// i = 1;
// i = 2;
// ...
// i = 9;
//
// i = 0;
// i = 2;
// i = 4;
// i = 6;
// i = 8;

// i=0
// i=3
// i=6
// i=9
// for(let i = 0; i < 10; i=i+1){
//     console.log("Привет Саша")
// }

//STEPS
// let i = 3;
//
// какой то код
//
// i = 4;

/**ЦИКЛ WHILE*/
// let i = 0
// while (i < 10){
//     i=i+2; //i+=2 //i=2
//     console.log("Итерация: " + i); //Итерация: 2
//
//     //i=i+1 //i+=1 или i++
//     // console.log("Итерация: " + i); //Итерация: 1
//     // console.log("")
// }
//
// let num = 1
// do {
//     console.log("Привет: " + num)
//     num++;
// }while(num<=0) //1<=0
//будет работать как минимум 1 раз

//ПРАКТИКА FOR, WHILE LOOP
/**Создать переменную и записать в нее число, например 10.
10 раз увеличить значение этой переменной на 1. Результат (1 шт.) вывести в консоль.*/
// let num = 15
// let i = 0
//
// while (i<10){
//     i++
//     num++
// }
// console.log('result: ' + num)

/**Увеличивая счетчик цикла на 2, нужно 5 раз:
    - запрашивать у пользователя ввод числа
- проверять, равно ли это число 10. Если равно, выводить "Равно 10". Иначе выводить "Не равно 10"*/
// for(let i = 0; i < 10; i=i+2){
//     let num = Number(prompt("Введите число"))
//     if( num === 10) {
//         console.log("Равно 10")
//     }
//     else{
//         console.log('Не равно 10')
//     }
// }

/**1) Вывести в консоль квадраты чисел от 0 до 100 (не включая 100) - т.е. вывести числа 0, 1, 4, 9, 16...
 * 2) Задавать количество чисел, которые нужно вывести, при помощи функции prompt.*/

// let num = Number(prompt('Введите число')) //5
// for(let i = 0; i<num; i++){
//     console.log(i**2)
// }

/**
 Перепишите код, заменив цикл for на while, без изменения поведения цикла.
 for (let i = 0; i < 3; i++) {
    alert( number ${i}! );
 }
 */

// let i = 0
// while (i < 3){
//     i++
//     alert(`number ${i}!`);
//
// }

/** FUNCTIONS */
// const num1 = Number(prompt("Введите первое число: "))
// const num2 = Number(prompt("Введите второе число: "))
// const operator = prompt("Введите оператор: ")
//
// const res1 = calculateTwoNumbers(num2, num1, operator)
// const res2 = calculateTwoNumbers(8, 6, "-")
// const res3 = calculateTwoNumbers(5, 20, "*")
//
// console.log(res1)
// console.log(res2)
// console.log(res3)
//
// function calculateTwoNumbers(num1, num2, operator) {
//     let result = 0
//     if(operator==="плюс" || operator==="+"){
//         result = num1 + num2
//     }
//     else if(operator==="минус" || operator==="-"){
//         result = num1 - num2
//     }
//     else if(operator==="умножение" || operator==="*"){
//         result = num1 * num2
//     }
//     else if(operator==="деление" || operator==="/"){
//         result = num1 / num2
//     }
//
//     return result
// }//void

// function sayHiToUser(name, message){
//     console.log(message + ", " + name)
// }
//
// const time = new Date().getHours();
// console.log(time)
//
// sayHiToUser("Sasha", "Привет")
// sayHiToUser("Damina", "Пока")
// sayHiToUser("Madina", "Добрый день")

/*ПРИМЕР МАДИНЫ*/

// function sayHi(name, time){
//     if (time < 12 && time >= 6) {
//         console.log("Good morning, " + name);
//     } else if (time >= 12 && time < 18) {
//         console.log("Good afternoon, " + name);
//     } else if (time >= 18 && time < 21) {
//         console.log("Good evening, " + name);
//     } else {
//         console.log("Good night, " + name);
//     }
// }

// const name = prompt("Enter your name");
// const hours = new Date().getHours();

// sayHi("Olzhas", 8)
// sayHi(name, hours)

/**Function - practice*/
//importing outside function
const convertNumToString = require("./utils/convertNumToString");
const convertStrToNum = require("./utils/convertStrToNum");
const convertNumOrStr = require("./utils/convertNumOrStr");

// console.log(typeof convertNumToString(98));
// console.log(typeof convertNumToString(54));

console.log(convertNumOrStr("97"));
console.log(convertNumOrStr(97));

//ЗАДАЧА 1
/*Написать функцию, котрая возвращает строку - 
случайный цвет в формате rgb. Это будет строка вида "rgb(10,55,250)"

Здесь у вас будет две функции: одна ваша - getRandomRGB, 
а вторая - функция получения случайного числа в диапазоне min - max. 

Вот эта функция (просто скопируйте, она уже готова):
function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

Подсказка: 
Каждый цвет - 3 числа, каждое число лежит в диапазоне от 0 до 255. 
Одна функция может вызывать другую функцию*/

const randomNum1 = getRandomInteger(0, 100); //0 100 55 87
const randomNum2 = getRandomInteger(0, 100);
const randomNum3 = getRandomInteger(0, 100);

getRandomRGB(randomNum1, randomNum2, randomNum3) //=> rgb(13, 15, 53)

`Number: ${randomNum1}`
`Name: ${name}`

`rgb(${}, ${}, ${})`
