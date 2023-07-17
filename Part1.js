//1
function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}

//2
function sumInt(n) {
  if (n === 1) {
    return 1;
  } else {
    return n + sumInt(n - 1);
  }
}

//3
function reverseStr(str) {
  if (str === "") {
    return "";
  } else {
    return reverseStr(str.slice(1)) + str[0];
  }
}

//4
function countWhiteSpace(str) {
  if (str === "") {
    return 0;
  } else {
    if (str[0] === " ") {
      return 1 + countWhiteSpace(str.slice(1));
    } else {
      return countWhiteSpace(str.slice(1));
    }
  }
}

//5
const sumDigits = (num) => {
  if (num < 10) {
    return num;
  }
  //if number has more then one digit, stringify and split into array
  arr = num.toString().split("");
  //turn each string into a number and sum them could use a for loop
  summArr = arr.reduce((total, value) => {
    return (total += parseInt(value));
  }, 0);
  //then re-run the number
  return sumDigits(summArr);
};

//6
const fib = (n) => {
  if (n === 1) {
    return 0;
  }
  if (n <= 3) {
    return 1;
  }
  return fib(n - 1) + fib(n - 2);
};
console.log(fib(5));
