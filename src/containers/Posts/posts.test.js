import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import reducer, { Types, actions } from "./posts";
import postsService from "./posts-service";
import {
  getMockData,
  postMockData,
  putMockData,
  deleteMockData
} from "./__mocks__";

jest.mock("./posts-service");

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe("Reducers", () => {
  it("returns all", () => {
    const payload = [
      { id: 1, title: "Example 1", done: false },
      { id: 2, title: "Example 2", done: false },
      { id: 3, title: "Example 3", done: true }
    ];

    expect(
      reducer([], {
        type: Types.FETCH_POSTS,
        payload
      })
    ).toEqual({
      list: payload
    });
  });

  it("returns state with the new one", () => {
    const defaultState = {
      list: [
        { title: "Example 1", done: false },
        { title: "Example 2", done: false },
        { title: "Example 3", done: true }
      ]
    };

    const payload = { title: "Example 4", done: true };

    const result = reducer(defaultState, {
      type: Types.CREATE_POST,
      payload
    });

    expect(result.list.length).toEqual(4);
    expect(result.list[3]).toEqual(expect.objectContaining(payload));
  });

  it("returns state with the updated one", () => {
    const defaultState = {
      list: [
        { id: 1, title: "Example 1", done: false },
        { id: 2, title: "Example 2", done: false },
        { id: 3, title: "Example 3", done: true }
      ]
    };

    const newState = {
      list: [
        { id: 1, title: "Example 1 Updated", done: false },
        { id: 2, title: "Example 2", done: false },
        { id: 3, title: "Example 3", done: true }
      ]
    };

    expect(
      reducer(defaultState, {
        type: Types.UPDATE_POST,
        payload: { id: 1, title: "Example 1 Updated" }
      })
    ).toEqual(newState);
  });

  it("returns state without the removed one", () => {
    const defaultState = {
      list: [
        { id: 1, title: "Example 1", done: false },
        { id: 2, title: "Example 2", done: false },
        { id: 3, title: "Example 3", done: true }
      ]
    };

    const newState = {
      list: [
        { id: 2, title: "Example 2", done: false },
        { id: 3, title: "Example 3", done: true }
      ]
    };

    expect(
      reducer(defaultState, {
        type: Types.REMOVE_POST,
        id: 1
      })
    ).toEqual(newState);
  });
});

describe("Action Creators", () => {
  let store;

  beforeEach(() => {
    store = mockStore([]);
  });

  it("fetches all posts", async () => {
    postsService.get.mockResolvedValue({ data: getMockData });

    const expectedActions = [{ type: Types.FETCH_POSTS, payload: getMockData }];

    await store.dispatch(actions.fetch());

    expect(store.getActions()).toEqual(expectedActions);
  });

  it("creates a post", async () => {
    postsService.create.mockResolvedValue({ data: postMockData });

    const expectedActions = [
      { type: Types.CREATE_POST, payload: postMockData }
    ];

    await store.dispatch(actions.create(postMockData));

    expect(store.getActions()).toEqual(expectedActions);
  });

  it("updates a post", async () => {
    postsService.update.mockResolvedValue({ data: putMockData });

    const expectedActions = [{ type: Types.UPDATE_POST, payload: putMockData }];

    await store.dispatch(actions.update(putMockData));

    expect(store.getActions()).toEqual(expectedActions);
  });

  it("removes a post", async () => {
    postsService.remove.mockResolvedValue(deleteMockData);

    const expectedActions = [{ type: Types.REMOVE_POST, id: 123 }];

    await store.dispatch(actions.remove(123));

    expect(store.getActions()).toEqual(expectedActions);
  });
});
