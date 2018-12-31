import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import reducer, { Types, actionCreators } from "./posts";
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
    ).toEqual(payload);
  });

  it("returns state with the new one", () => {
    const defaultState = [
      { title: "Example 1", done: false },
      { title: "Example 2", done: false },
      { title: "Example 3", done: true }
    ];

    const payload = { title: "Example 4", done: true };

    const result = reducer(defaultState, {
      type: Types.CREATE_POST,
      payload
    });

    expect(result.length).toEqual(4);
    expect(result[3]).toEqual(expect.objectContaining(payload));
  });

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
      reducer(defaultState, {
        type: Types.UPDATE_POST,
        id: 1,
        payload: { title: "Example 1 Updated" }
      })
    ).toEqual(newState);
  });

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
    postsService.get.mockResolvedValue(getMockData);

    const expectedActions = [
      { type: Types.FETCH_POSTS, payload: getMockData.data.payload }
    ];

    await store.dispatch(actionCreators.fetch());

    expect(store.getActions()).toEqual(expectedActions);
  });

  it("creates a post", async () => {
    postsService.create.mockResolvedValue(postMockData);

    const expectedActions = [
      { type: Types.CREATE_POST, payload: postMockData.data.payload }
    ];

    await store.dispatch(actionCreators.create());

    expect(store.getActions()).toEqual(expectedActions);
  });

  it("updates a post", async () => {
    postsService.update.mockResolvedValue(putMockData);

    const expectedActions = [
      { type: Types.UPDATE_POST, payload: putMockData.data.payload }
    ];

    await store.dispatch(actionCreators.update());

    expect(store.getActions()).toEqual(expectedActions);
  });

  it("removes a post", async () => {
    postsService.remove.mockResolvedValue(deleteMockData);

    const expectedActions = [{ type: Types.REMOVE_POST }];

    await store.dispatch(actionCreators.remove());

    expect(store.getActions()).toEqual(expectedActions);
  });
});
