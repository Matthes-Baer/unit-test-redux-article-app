import ListSlice, { initialState, testAddReducer } from "../features/ListSlice"; // Import the slice itself as well as any reducers that you want to test.

describe("tests for ListSlice", () => {
  // A test where you check if the slice initializes with the initialState. No reducer operation took place.
  test("initialize slice with initialValue", () => {
    const listSliceInit = ListSlice(initialState, { type: "unknown" });
    expect(listSliceInit).toBe(initialState);
  });

  // A test where you use the reducer to add an element to the current slice state.
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

    // It's expected that the slice state also contains the added testData as array element.
    expect(afterReducerOperation).toStrictEqual({
      value: [initialState.value.at(0), testData],
    });
  });
});
