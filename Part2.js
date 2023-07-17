//1
function deepTotal(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      sum += deepTotal(arr[i]); // Recursively call deepTotal for nested arrays
    } else {
      sum += arr[i]; // Add integer elements to the sum
    }
  }
  return sum;
}

//2
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

//3
const countObjects = (obj) => {
  let objCount = 1;
  for (const key in obj) {
    if (typeof obj[key] === "object") {
      objCount += countObjects(obj[key]);
    }
  }
  return objCount;
};

//4
function deepFreeze(objOrArr) {
  Object.freeze(objOrArr);
  for (const keyOrInd in objOrArr) {
    if (typeof objOrArr[keyOrInd] === "object") {
      deepFreeze(objOrArr[keyOrInd]);
    }
  }
}

//5
function analyzeArray(str, array) {
  array.forEach((element, index) => {
    if (Array.isArray(element)) analyzeArray(`${str}.${index}`, element);
    else console.log(`${str}.${index}: ${element}`);
  });
}

//5 ALT
function analyzeArray(str, array) {
  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    const indexPath = `${str}.${i}`;

    if (Array.isArray(element)) {
      analyzeArray(indexPath, element);
    } else {
      console.log(`${indexPath}: ${element}`);
    }
  }
}

//6
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
