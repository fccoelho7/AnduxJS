import reducer, { actionCreators } from "./todos";
const { get, create, update, remove } = actionCreators;

describe("Reducer", () => {
  describe("Get", () => {
    it("returns all", () => {
      const defaultState = [
        { id: 1, title: "Example 1", done: false },
        { id: 2, title: "Example 2", done: false },
        { id: 3, title: "Example 3", done: true }
      ];

      expect(reducer(defaultState, get())).toEqual(defaultState);
    });
  });

  describe("Create", () => {
    it("returns state with the new one", () => {
      const defaultState = [
        { id: 1, title: "Example 1", done: false },
        { id: 2, title: "Example 2", done: false },
        { id: 3, title: "Example 3", done: true }
      ];

      const newOne = { id: 4, title: "Example 4", done: true };

      expect(reducer(defaultState, create(newOne))).toEqual([
        ...defaultState,
        newOne
      ]);
    });
  });

  describe("Update", () => {
    it("returns state with the updated one", () => {
      const defaultState = [
        { id: 1, title: "Example 1", done: false },
        { id: 2, title: "Example 2", done: false },
        { id: 3, title: "Example 3", done: true }
      ];

      const newState = [
        { id: 1, title: "Example 1 Updated", done: false },
        { id: 2, title: "Example 2", done: false },
        { id: 3, title: "Example 3", done: true }
      ];

      expect(
        reducer(defaultState, update(0, { title: "Example 1 Updated" }))
      ).toEqual(newState);
    });
  });

  describe("Remove", () => {
    it("returns state without the removed one", () => {
      const defaultState = [
        { id: 1, title: "Example 1", done: false },
        { id: 2, title: "Example 2", done: false },
        { id: 3, title: "Example 3", done: true }
      ];

      const newState = [
        { id: 1, title: "Example 1", done: false },
        { id: 3, title: "Example 3", done: true }
      ];

      expect(reducer(defaultState, remove(1))).toEqual(newState);
    });
  });
});
