import * as Types from "./types";
import reducer from "./";

describe("Reducers", () => {
  const defaultState = {
    list: [
      { id: 1, title: "Example 1", done: false },
      { id: 2, title: "Example 2", done: false },
      { id: 3, title: "Example 3", done: true }
    ]
  };

  it("returns all", () => {
    const payload = [
      { id: 1, title: "Example 1", done: false },
      { id: 2, title: "Example 2", done: false },
      { id: 3, title: "Example 3", done: true }
    ];

    expect(
      reducer(
        {},
        {
          type: Types.FETCH,
          payload
        }
      )
    ).toEqual(defaultState);
  });

  it("returns state with the new one", () => {
    const payload = { title: "Example 4", done: true };

    const result = reducer(defaultState, {
      type: Types.CREATE,
      payload
    });

    expect(result.list.length).toEqual(4);
    expect(result.list[3]).toEqual(expect.objectContaining(payload));
  });

  it("returns state with the updated one", () => {
    const newState = {
      list: [
        { id: 1, title: "Example 1 Updated", done: false },
        { id: 2, title: "Example 2", done: false },
        { id: 3, title: "Example 3", done: true }
      ]
    };

    expect(
      reducer(defaultState, {
        type: Types.UPDATE,
        payload: { id: 1, title: "Example 1 Updated" }
      })
    ).toEqual(newState);
  });

  it("returns state without the removed one", () => {
    const newState = {
      list: [
        { id: 2, title: "Example 2", done: false },
        { id: 3, title: "Example 3", done: true }
      ]
    };

    expect(
      reducer(defaultState, {
        type: Types.REMOVE,
        id: 1
      })
    ).toEqual(newState);
  });
});
