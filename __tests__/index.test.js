const {
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
} = require("../index.js");

describe("factorial(n)", () => {
  test("returns 1 when passed 0 or 1", () => {
    expect(factorial(0)).toBe(1);
    expect(factorial(1)).toBe(1);
  });
  test("returns factorial of given number", () => {
    expect(factorial(2)).toBe(2);
    expect(factorial(3)).toBe(6);
    expect(factorial(5)).toBe(120);
    expect(factorial(8)).toBe(40320);
  });
});

describe("sumOneThrough(n)", () => {
  test("returns 1 when passed 1 or lower", () => {
    expect(sumOneThrough(1)).toBe(1);
    expect(sumOneThrough(0)).toBe(1);
    expect(sumOneThrough(-5)).toBe(1);
  });
  test("returns sum of integers 1 through given number", () => {
    expect(sumOneThrough(2)).toBe(3);
    expect(sumOneThrough(3)).toBe(6);
    expect(sumOneThrough(12)).toBe(78);
    expect(sumOneThrough(55)).toBe(1540);
  });
});

describe("reverseString(str)", () => {
  test("returns a string", () => {
    expect(reverseString("")).toBe("");
    expect(reverseString("a")).toBe("a");
    expect(reverseString("x")).toBe("x");
  });
  test("returns a reversed string", () => {
    expect(reverseString("ab")).toBe("ba");
    expect(reverseString("abcdefg")).toBe("gfedcba");
    expect(reverseString("123456789")).toBe("987654321");
  });
});

describe("countWhitespace(str)", () => {
  test("return 0 where no whitespace is found", () => {
    expect(countWhitespace("")).toBe(0);
    expect(countWhitespace("a")).toBe(0);
    expect(countWhitespace("abc")).toBe(0);
    expect(countWhitespace("abc432656fgwfd")).toBe(0);
  });
  test("return count of whitespace", () => {
    expect(countWhitespace(" ")).toBe(1);
    expect(countWhitespace("a b c d")).toBe(3);
    expect(countWhitespace("1 2 3 4 5 6 7 8 9")).toBe(8);
    expect(countWhitespace("fgdfs gfysfdy wgygyd f d d")).toBe(5);
  });
});

describe("sumDigits(n)", () => {
  test("returns passed single digit number", () => {
    expect(sumDigits(0)).toBe(0);
    expect(sumDigits(1)).toBe(1);
    expect(sumDigits(4)).toBe(4);
    expect(sumDigits(9)).toBe(9);
  });
  test("returns sum of multiple digits when sum is less than 10", () => {
    expect(sumDigits(13)).toBe(4);
    expect(sumDigits(43)).toBe(7);
    expect(sumDigits(1232)).toBe(8);
    expect(sumDigits(111111)).toBe(6);
  });
  test("returns sum of multiple digits down to a single digit", () => {
    expect(sumDigits(99)).toBe(9);
    expect(sumDigits(456)).toBe(6);
    expect(sumDigits(1234567)).toBe(1);
    expect(sumDigits(94532)).toBe(5);
  });
});

describe("fib(n)", () => {
  test("returns 0 when passed 1", () => {
    expect(fib(1)).toBe(0);
  });
  test("returns nth fibonacci number", () => {
    expect(fib(2)).toBe(1);
    expect(fib(3)).toBe(1);
    expect(fib(4)).toBe(2);
    expect(fib(10)).toBe(34);
    expect(fib(20)).toBe(4181);
    expect(fib(30)).toBe(514229);
    expect(fib(40)).toBe(63245986);
  });
});

describe("deepTotal(array)", () => {
  test("returns 0 when passed an empty array", () => {
    expect(deepTotal([])).toBe(0);
  });
  test("returns sum of numbers provided in a flat array", () => {
    expect(deepTotal([0])).toBe(0);
    expect(deepTotal([5])).toBe(5);
    expect(deepTotal([1, 2, 3, 4, 5])).toBe(15);
    expect(deepTotal([8, 14, 835, 6])).toBe(863);
  });
  test("returns sum of numbers provided in a nested array", () => {
    expect(deepTotal([1, [2]])).toBe(3);
    expect(deepTotal([1, [2, 3, 4], 5, [6, 7, 8]])).toBe(36);
    expect(
      deepTotal([1, [2, 3, [4, 5, 6]], [7, 8, [9, 10]], [11, [12, [13]]]])
    ).toBe(91);
  });
  test("input array is not mutated", () => {
    const input = [1, [2, [3]]];
    deepTotal(input);
    expect(input).toEqual([1, [2, [3]]]);
  });
});

describe("deepIncludes(array, item)", () => {
  test("returns false when passed an empty array", () => {
    expect(deepIncludes([], "hello")).toBe(false);
  });
  test("returns false when item is not present in provided flat array", () => {
    expect(deepIncludes([1, 2, 3], "hello")).toBe(false);
    expect(deepIncludes(["a", "b", "c"], 1)).toBe(false);
  });
  test("returns true when item is present in provided flat array", () => {
    expect(deepIncludes([1, 2, 3], 2)).toBe(true);
    expect(deepIncludes(["a", "b", "hello", "c"], "hello")).toBe(true);
  });
  test("returns false when item is not present in provided nested array", () => {
    expect(deepIncludes([1, [2, [3]]], "hello")).toBe(false);
    expect(deepIncludes(["a", ["b", ["c"], "d"], "e"], 1)).toBe(false);
    expect(deepIncludes([1, [2], 3, [4, [5], [6]], [7, 8, 9]], "hello")).toBe(
      false
    );
  });
  test("returns true when item is present in provided nested array", () => {
    expect(deepIncludes([1, [2]], 2)).toBe(true);
    expect(deepIncludes(["a", ["b", ["c"], ["d"]], "e"], "d")).toBe(true);
    expect(
      deepIncludes([1, [2, 3, [4]], [5, 6, [7], ["hello"]]], "hello")
    ).toBe(true);
    expect(deepIncludes([1, [2, 3, [4]], [5, 6, [7]], 8], 8)).toBe(true);
  });
  test("input array is not mutated", () => {
    const input = [1, [2, [3]]];
    deepIncludes(input, "hello");
    expect(input).toEqual([1, [2, [3]]]);
  });
});

describe("countObjects(obj)", () => {
  test("returns 1 when passed a flat object", () => {
    expect(countObjects({})).toBe(1);
    expect(countObjects({ a: 1 })).toBe(1);
    expect(countObjects({ a: 1, b: 2, c: 3 })).toBe(1);
  });
  test("returns count of nested objects", () => {
    expect(countObjects({ a: {} })).toBe(2);
    expect(countObjects({ a: { b: {} } })).toBe(3);
    expect(countObjects({ a: { b: { c: {} } } })).toBe(4);
    expect(countObjects({ a: {}, b: {}, c: {} })).toBe(4);
    expect(countObjects({ a: { b: { c: {} } }, d: { e: { f: {} } } })).toBe(7);
    expect(countObjects({ a: 1, b: 2, c: { d: 3, e: { f: 4 } } })).toBe(3);
  });
  test("input object is not mutated", () => {
    const input = { a: { b: { c: { d: 1 } } } };
    countObjects(input);
    expect(input).toEqual({ a: { b: { c: { d: 1 } } } });
  });
});

describe.skip("deepFreeze(objOrArr)", () => {
  test("freezes a flat object", () => {
    let input = {};
    deepFreeze(input);
    expect(Object.isFrozen(input)).toBe(true);

    input = { a: 1, b: 2, c: 3 };
    deepFreeze(input);
    expect(Object.isFrozen(input)).toBe(true);
  });
  test("freezes a flat array", () => {
    let input = [];
    deepFreeze(input);
    expect(Object.isFrozen(input)).toBe(true);

    input = [1, 2, 3];
    deepFreeze(input);
    expect(Object.isFrozen(input)).toBe(true);
  });
  test("deeply freezes singly nested objects", () => {
    let input = { a: {} };
    deepFreeze(input);
    expect(Object.isFrozen(input)).toBe(true);
    expect(Object.isFrozen(input.a)).toBe(true);

    input = { a: {}, b: {}, c: { c1: 1, c2: 2 } };
    deepFreeze(input);
    expect(Object.isFrozen(input)).toBe(true);
    expect(Object.isFrozen(input.a)).toBe(true);
    expect(Object.isFrozen(input.b)).toBe(true);
    expect(Object.isFrozen(input.c)).toBe(true);
  });
  test("deeply freezes singly nested arrays", () => {
    let input = [[]];
    deepFreeze(input);
    expect(Object.isFrozen(input)).toBe(true);
    expect(Object.isFrozen(input[0])).toBe(true);

    input = [[], [], [1, 2, 3]];
    deepFreeze(input);
    expect(Object.isFrozen(input)).toBe(true);
    expect(Object.isFrozen(input[0])).toBe(true);
    expect(Object.isFrozen(input[1])).toBe(true);
    expect(Object.isFrozen(input[2])).toBe(true);
  });
  test("deeply freezes nested objects and arrays", () => {
    let input = { a: { b: { c: { d: { e: { e1: 1, e2: 2 } } } } } };
    deepFreeze(input);
    expect(Object.isFrozen(input)).toBe(true);
    expect(Object.isFrozen(input.a)).toBe(true);
    expect(Object.isFrozen(input.a.b)).toBe(true);
    expect(Object.isFrozen(input.a.b.c)).toBe(true);
    expect(Object.isFrozen(input.a.b.c.d)).toBe(true);
    expect(Object.isFrozen(input.a.b.c.d.e)).toBe(true);

    input = [1, [2, [3, [4, [5, [6, 7, 8]]]]]];
    deepFreeze(input);
    expect(Object.isFrozen(input)).toBe(true);
    expect(Object.isFrozen(input[1])).toBe(true);
    expect(Object.isFrozen(input[1][1])).toBe(true);
    expect(Object.isFrozen(input[1][1][1])).toBe(true);
    expect(Object.isFrozen(input[1][1][1][1])).toBe(true);
    expect(Object.isFrozen(input[1][1][1][1][1])).toBe(true);

    input = { a: [{ b: [] }] };
    deepFreeze(input);
    expect(Object.isFrozen(input)).toBe(true);
    expect(Object.isFrozen(input.a)).toBe(true);
    expect(Object.isFrozen(input.a[0])).toBe(true);
    expect(Object.isFrozen(input.a[0].b)).toBe(true);
  });
  test("input is not mutated", () => {
    let input = { a: { b: { c: { d: { e: { e1: 1, e2: 2 } } } } } };
    deepFreeze(input);
    expect(input).toEqual({ a: { b: { c: { d: { e: { e1: 1, e2: 2 } } } } } });

    input = [1, [2, [3, [4, [5, [6, 7, 8]]]]]];
    deepFreeze(input);
    expect(input).toEqual([1, [2, [3, [4, [5, [6, 7, 8]]]]]]);
  });
});

describe.skip("analyzeArray(str, array)", () => {
  let consoleLogSpy;
  beforeEach(() => {
    consoleLogSpy = jest.spyOn(console, "log");
  });
  afterEach(() => {
    consoleLogSpy.mockRestore();
  });
  test("invokes console.log with a single array element", () => {
    const array = ["carrot"];
    analyzeArray("jimbo", array);
    expect(consoleLogSpy.mock.calls.length).toBe(1);
    expect(consoleLogSpy.mock.calls[0][0]).toBe("jimbo.0: carrot");
  });
  test("invokes console.log with multiple array elements", () => {
    const array = ["carrot", "car", "turtle"];
    analyzeArray("jimbo", array);
    expect(consoleLogSpy.mock.calls.length).toBe(3);
    expect(consoleLogSpy.mock.calls[0][0]).toBe("jimbo.0: carrot");
    expect(consoleLogSpy.mock.calls[1][0]).toBe("jimbo.1: car");
    expect(consoleLogSpy.mock.calls[2][0]).toBe("jimbo.2: turtle");
  });
  test("handles a singly nested array", () => {
    const array = ["carrot", "car", ["hello"], "turtle"];
    analyzeArray("jimbo", array);
    expect(consoleLogSpy.mock.calls[0][0]).toBe("jimbo.0: carrot");
    expect(consoleLogSpy.mock.calls[1][0]).toBe("jimbo.1: car");
    expect(consoleLogSpy.mock.calls[2][0]).toBe("jimbo.2.0: hello");
    expect(consoleLogSpy.mock.calls[3][0]).toBe("jimbo.3: turtle");
  });
  test("handles multiple singly nested arrays", () => {
    const array = ["carrot", ["car", "boat", "plane"], "turtle", ["house"]];
    analyzeArray("jimbo", array);
    expect(consoleLogSpy.mock.calls[0][0]).toBe("jimbo.0: carrot");
    expect(consoleLogSpy.mock.calls[1][0]).toBe("jimbo.1.0: car");
    expect(consoleLogSpy.mock.calls[2][0]).toBe("jimbo.1.1: boat");
    expect(consoleLogSpy.mock.calls[3][0]).toBe("jimbo.1.2: plane");
    expect(consoleLogSpy.mock.calls[4][0]).toBe("jimbo.2: turtle");
    expect(consoleLogSpy.mock.calls[5][0]).toBe("jimbo.3.0: house");
  });
  test("handles a deeply nested array", () => {
    const array = ["a", ["b", ["c", ["d"]]]];
    analyzeArray("jimbo", array);
    expect(consoleLogSpy.mock.calls[0][0]).toBe("jimbo.0: a");
    expect(consoleLogSpy.mock.calls[1][0]).toBe("jimbo.1.0: b");
    expect(consoleLogSpy.mock.calls[2][0]).toBe("jimbo.1.1.0: c");
    expect(consoleLogSpy.mock.calls[3][0]).toBe("jimbo.1.1.1.0: d");
  });
});

describe.skip("stringify(item)", () => {
  test("returns a string", () => {
    expect(stringify("")).toBe('""');
    expect(stringify(12)).toBe("12");
    expect(stringify("hello guy")).toBe('"hello guy"');
  });
  test("correctly stringifies a flat array", () => {
    expect(stringify([])).toBe("[]");
    expect(stringify([1, 2, 3])).toBe("[1,2,3]");
    expect(stringify(["a", "b", "c"])).toBe('["a","b","c"]');
    expect(stringify(["a", 1, "b", 2, "c", 3])).toBe('["a",1,"b",2,"c",3]');
    expect(stringify([true, false])).toBe("[true,false]");
  });
  test("correctly stringifies a nested array", () => {
    expect(stringify([1, 2, [3, 4]])).toBe("[1,2,[3,4]]");
    expect(stringify([1, 2, [3, 4, [5, 6]], 7, 8])).toBe(
      "[1,2,[3,4,[5,6]],7,8]"
    );
  });
  test("correctly stringifies a flat object", () => {
    expect(stringify({})).toBe("{}");
    expect(stringify({ a: 1 })).toBe('{"a":1}');
    expect(stringify({ a: 1, b: 2, c: 3 })).toBe('{"a":1,"b":2,"c":3}');
  });
  test("correctly stringifies a nested object", () => {
    expect(stringify({ a: 1, b: { c: 2 } })).toBe('{"a":1,"b":{"c":2}}');
    expect(
      stringify({ a: 1, b: { c: 2 }, d: { e: { f: { g: "hello" } } } })
    ).toBe('{"a":1,"b":{"c":2},"d":{"e":{"f":{"g":"hello"}}}}');
  });
  test("handles a complex nested input", () => {
    expect(
      stringify([
        {
          name: "dave",
          job: { title: "tutor" },
          hobbies: ["dancing", "swimming"],
        },
        [
          {
            a: 1,
            b: [
              "hello",
              { nestedArr: [1, 2, 3, { strings: ["a", "b", "c"] }, 4, 5] },
            ],
            c: [undefined, null, undefined],
          },
        ],
        "I am getting quite nested now",
      ])
    ).toBe(
      '[{"name":"dave","job":{"title":"tutor"},"hobbies":["dancing","swimming"]},[{"a":1,"b":["hello",{"nestedArr":[1,2,3,{"strings":["a","b","c"]},4,5]}],"c":[null,null,null]}],"I am getting quite nested now"]'
    );
  });
  test("input is not mutated", () => {
    const input = {
      a: [null, { b: { c: [1, 2, 3, "hello"] }, d: {} }, "hello"],
    };
    stringify(input);
    expect(input).toEqual({
      a: [null, { b: { c: [1, 2, 3, "hello"] }, d: {} }, "hello"],
    });
  });
});
