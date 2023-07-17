describe.only("analyzeArray(str, array)", () => {
  consoleLogSpy = jest.spyOn(console, "log");
  expect(consoleLogSpy.mock.calls.length).toBe(1);
  expect(consoleLogSpy.mock.calls[0][0]).toBe("jimbo.0: carrot");
});

//checkindex.test.js if unsure. You may not need the beforeEach and after alls.
