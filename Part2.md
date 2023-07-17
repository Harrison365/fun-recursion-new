1. Implement a function that totals an arbitrarily nested array of integers.

E.g.

deepTotal([1, 2, 3]) // ---> 6
deepTotal([1, [5, 10]]) // ---> 16
deepTotal([3, [[6]], 9]) // ---> 18

2. Implement a function that determines if an array includes a particular value at any level of nesting.

deepIncludes([1, 2], 3); // ---> false
deepIncludes(["toast", ["avocado", ["chilli flakes"]]], "avocado"); // ---> true

3. Implement a function that counts the number of objects in an arbitrarily nested object.

countObjects({ a: 1 }); // ---> 1
countObjects({ a: { b: { c: 1 } } }); // ---> 3

4. Implement your own version of the deep-freeze function, which takes an object (or an array) and freezes it and all of its child array/objects, meaning none of them can be mutated.

You may wish to read up more on Object.freeze to understand how it works shallowly on objects and arrays.

5. Write a function analyzeArray that takes a string and an arbitrarily complex nested array and console.logs the value of each array element on a separate line. The value of each line should be preceded by the string and numbers indicating the index path to each element. You can assume that the array contains only strings and other nested array.

e.g.

const arr = ["carrot", ["car", "boat", "plane"], "turtle", ["house"]];
analyzeArray("jimbo", arr);
should console.log:

jimbo.0: carrot
jimbo.1.0: car
jimbo.1.1 : boat
jimbo.1.2: plane
jimbo.2: turtle
jimbo.3.0: house
Hint: Have a look at the Testing for Side Effects notes in Testing Higher Order Functions for some tips on how to test for the console logs

6.Implement a JSON.stringify function

Just do it step by step, using TDD. Look into what constitutes acceptable JSONand start off testing the simplest JSON object you can think of and build from there.
