import ListSlice, { initialState, testAddReducer } from "../features/ListSlice";

describe("tests for listSlice", () => {
  test("initialize slice with initialValue", () => {
    const listSliceInit = ListSlice(initialState, { type: "unknown" });
    expect(listSliceInit).toBe(initialState);
  });

  test("testAddReducer", () => {
    const testData = {
      id: `${new Date().getSeconds()}`,
      description: "This is for the test section",
      significance: 5,
    };

    const afterReducerOperation = ListSlice(
      initialState,
      testAddReducer(testData)
    );

    expect(afterReducerOperation).toStrictEqual({
      value: [initialState.value.at(0), testData],
    });
  });
});
