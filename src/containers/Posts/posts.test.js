import reducer, { actionCreators } from "./posts";
const { fetch, create, update, remove } = actionCreators;

describe("Reducer", () => {
  describe("Fetch", () => {
    it("returns all", () => {
      const defaultState = [
        { id: 1, title: "Example 1", done: false },
        { id: 2, title: "Example 2", done: false },
        { id: 3, title: "Example 3", done: true }
      ];

      expect(reducer(defaultState, fetch())).toEqual(defaultState);
    });
  });

  describe("Create", () => {
    it("returns state with the new one", () => {
      const defaultState = [
        { title: "Example 1", done: false },
        { title: "Example 2", done: false },
        { title: "Example 3", done: true }
      ];
      const newOne = { title: "Example 4", done: true };
      const result = reducer(defaultState, create(newOne));

      expect(result.length).toEqual(4);
      expect(result[3]).toEqual(expect.objectContaining(newOne));
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
        reducer(defaultState, update(1, { title: "Example 1 Updated" }))
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
        { id: 2, title: "Example 2", done: false },
        { id: 3, title: "Example 3", done: true }
      ];

      expect(reducer(defaultState, remove(1))).toEqual(newState);
    });
  });
});
