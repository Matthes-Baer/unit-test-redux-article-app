import ListSlice, { initialState } from "../features/ListSlice";

describe("tests for listSlice", () => {
  test("initialize slice with initialValue", () => {
    const listSliceInit = ListSlice(initialState, { type: "unknown" });
    expect(listSliceInit).toBe(initialState);
  });
});
