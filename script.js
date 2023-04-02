// Задача №1
let str1 = prompt("Введіть перший рядок:");
let str2 = prompt("Введіть другий рядок:");
let str3 = prompt("Введіть третій рядок:");

let result = str1 + " " + str2 + " " + str3;
alert(result);

//Задача №2

let number = prompt("Введіть п'ятизначне число:");
let digits = number.split("");
alert(digits.join(" "));