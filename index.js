const factorial = (num) => {
  if (num < 2) {
    return 1;
  } //BASE CASE
  next = num - 1; //RECURSIVE STEP
  return num * factorial(num - 1); //RECURSIVE CALL
};

const sumOneThrough = (n) => {
  if (n < 2) {
    return 1;
  } //BASE CASE
  next = n - 1; //RECURSIVE STEP
  return n + sumOneThrough(next); //RECURSIVE CALL
};

const reverseString = (str) => {
  if (str.length <= 1) {
    return str;
  } //BASE CASE
  const nextStr = str.slice(0, -1);
  return str[str.length - 1] + reverseString(nextStr);
};

const countWhitespace = (str) => {
  let count = 0;
  if (str.length === 0) {
    return count;
  }
  if (str[0] == " ") {
    count++;
  }
  return (count += countWhitespace(str.slice(1)));
};

const sumDigits = (num) => {
  if (num < 10) {
    return num;
  }
  //if number has more then one digit, stringify and split into array
  arr = num.toString().split("");
  //turn each string into a number and sum them
  summArr = arr.reduce((total, value) => {
    return (total += parseInt(value));
  }, 0);
  //then re-run the number
  return sumDigits(summArr);
};

const fib = (n) => {
  if (n === 1) {
    return 0;
  }
  if (n <= 3) {
    return 1;
  }
  return fib(n - 1) + fib(n - 2);
};

//NON-RECURSIVE WAY vvv
// const fibonacci = (n) => {
//   let arr = [0, 1];
//   if (n === 1 || n === 2) {
//     return arr[n - 1];
//   }
//   let count = 2;
//   while (count <= n) {
//     arr.push(arr[count - 1] + arr[count - 2]);
//     count++;
//   }
//   return arr[count - 1];
// };

// console.log(fibonacci(1));
// console.log(fibonacci(2));
// console.log(fibonacci(3));
// console.log(fibonacci(4));
// console.log(fibonacci(5));
// console.log(fibonacci(6));
// console.log(fibonacci(7));
// console.log(fibonacci(8));

const deepTotal = (arr) => {
  let total = 0;
  arr.forEach((num) => {
    if (Array.isArray(num)) {
      total += deepTotal(num);
    } else {
      total += num;
    }
  });
  return total;
};

const deepIncludes = (arr, thing) => {
  let bool = false;
  arr.forEach((ele) => {
    if (Array.isArray(ele)) {
      if (deepIncludes(ele, thing)) {
        bool = true;
      }
    }
    if (ele === thing) {
      bool = true;
    }
  });
  return bool;
};

const countObjects = (obj) => {
  let objCount = 1;
  for (const key in obj) {
    if (typeof obj[key] === "object") {
      objCount += countObjects(obj[key]);
    }
  }
  return objCount;
};

function deepFreeze(objOrArr) {
  Object.freeze(objOrArr);
  for (const keyOrInd in objOrArr) {
    if (typeof objOrArr[keyOrInd] === "object") {
      deepFreeze(objOrArr[keyOrInd]);
    }
  }
}

function analyzeArray(str, array) {
  array.forEach((element, index) => {
    if (Array.isArray(element)) analyzeArray(`${str}.${index}`, element);
    else console.log(`${str}.${index}: ${element}`);
  });
}

function stringify(item) {
  // item is a number (avoiding NaN and Infinity) or boolean
  if (typeof item === "number" || typeof item === "boolean") return `${item}`;
  // item is a string
  if (typeof item === "string") return `"${item}"`;
  // item is null or undefined
  if (!item) return "null";

  let stringifiedItem = "";
  // item is an array
  if (Array.isArray(item)) {
    stringifiedItem += "[";
    item.forEach((element, index) => {
      stringifiedItem += stringify(element);
      if (index < item.length - 1) stringifiedItem += ",";
    });
    stringifiedItem += "]";
    // item is an object
  } else if (typeof item === "object") {
    stringifiedItem += "{";
    const entries = Object.entries(item);
    entries.forEach(([key, value], index) => {
      stringifiedItem += `"${key}":${stringify(value)}`;
      if (index < entries.length - 1) stringifiedItem += ",";
    });
    stringifiedItem += "}";
  }
  return stringifiedItem;
}

module.exports = {
  factorial,
  sumOneThrough,
  reverseString,
  countWhitespace,
  sumDigits,
  fib,
  deepTotal,
  deepIncludes,
  countObjects,
  deepFreeze,
  analyzeArray,
  stringify,
};
