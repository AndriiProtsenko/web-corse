//1. Написати функцію з одним аргументом, яка перевіряє чи є аргумент числом.
// Якщо так, то повертає чи є це цисло парним чи не парним.Якщо аргумент не число - повертає пусту строку.
function Task1(value) {
  if (typeof (value) !== 'number') {
      return "";
  }
  if (value % 2 === 0) {
      return "Число парне";
  } else {
      return "Число не парне";
  }
}

//2. Написати функцію, яка починає перебирати числа від 1 до нескінченності і перевіряє чи є число
// простим(просте число - те яке ділиться лише на 1 чи само на себе).Якщо просто число знайдене -
// воно додається до масиву.Після пʼятого знайденого простого числа функція повинна повернути суму
// всіх пʼяти простих чисел в масиві.
function Task2() {
  let number = 1;
  let simpleNumbers = [];

  for (let i = 0; i < 5; number++) {
      if (ValueIsSimple(number)) {
          simpleNumbers[i] = number;
          i++;
      }
  }
  return SumOfArrayNumbers(simpleNumbers);
}
function ValueIsSimple(value) {
  if (value <= 1)
      return false;

  for (let i = 2; i < value; i++) {
      if (value % i === 0) {
          return false;
      }
  }

  return true;
}
function SumOfArrayNumbers(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
      sum += array[i];
  }

  return sum;
}
//3. Написати функцію з одним аргументом n, що є числом.Функція повинна повернути суму наступного ряду
// з n чисел 1 + 11 + 111 + 1111 + ...., де кожний елемент - число з постійно зростаючою кількістю одиниць.
function Task3(n) {
  let array = [];
  let row = "";

  for (let i = 0; i < n; i++) {
      if (row === "") {
          row = "1";
      } else {
          row += "1";
      }

      array[i] = Number(row);
  }

  return SumOfArrayNumbers(array);
}
console.log("Task1. Виводимо результат, коли передаємо string: " + Task1("sdsds"));
console.log("Task1. Виводимо результат, коли передаємо boolean: " + Task1(true));
console.log("Task1. Виводимо результат, коли передаємо number = 1: " + Task1(1));
console.log("Task1. Виводимо результат, коли передаємо number = 4: " + Task1(4));

console.log("Task2. Сума перших 5ти простих чисел: " + Task2());

console.log("Task3. n = 3: " + Task3(3));
console.log("Task3. n = 4: " + Task3(4));
console.log("Task3. n = 11: " + Task3(11));

// ----------------------------

// код для того, щоб консоль автоматично не закривалася
var readline = require('readline');
var rl = readline.createInterface(process.stdin, process.stdout);
// --