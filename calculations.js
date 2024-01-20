var y = Number; // переменная y не определена, но теперь каждая функция знает, что это число

function increaseBalance(x, y) {
  x += y; // сложение
  return x;
}

function decreaseBalance(x, y) {
  // не хватало аргумента y
  x -= y; // вычитание
  return x;
}

function divideBalanceByAccounts(x, y) {
  x /= y; // деление
  return x;
  // console.log(x);
  // return выходит из тела функции, думаю этот вызов не нужен;
}

function getRestAfterDivision(x, y) {
  x %= y; // остаток после деления
  return x;
}

function getIncremented(y) {
  y++; // инкремент
  return y;
}

function getDecremented(x) {
  x--; // декремент
  return x;
}


console.log(increaseBalance(3000, 700));
console.log(decreaseBalance(3000, 700));
console.log(divideBalanceByAccounts(3000, 2)); // был лишний третий аргумент
console.log(getRestAfterDivision(7000, 3));
console.log(getIncremented(7000)); //новый вывод
console.log(getDecremented(3)); //новый вывод
