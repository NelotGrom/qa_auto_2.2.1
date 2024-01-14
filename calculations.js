var y = Number; // переменная y не определена, но теперь каждая функция знает, что это число 

function increaseBalance(x, y) {
  x = x + y;
  return x;
}

function decreaseBalance(x, y) {
x = x - y;
return x;
}

function divideBalanceByAccounts(x, y) { // не хватало аргумента y
  x = x / y;
  return x;
  // console.log(x);
  // return выходит из тела функции, думаю этот вызов не нужен;
}

function getRestAfterDivision(x, y) {
  x = x % y;
  return x;
}

console.log(increaseBalance(3000, 700));
console.log(decreaseBalance(3000, 700));
console.log(divideBalanceByAccounts(3000, 2)); // был лишний третий аргумент
console.log(getRestAfterDivision(7000, 3));
