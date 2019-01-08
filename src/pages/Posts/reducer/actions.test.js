import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import Types from "./types";
import actions from "./actions";
import httpService from "./http-service";
import {
  getMockData,
  postMockData,
  putMockData,
  deleteMockData
} from "./__mocks__";

jest.mock("./http-service");

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe("Actions", () => {
  let store;

  beforeEach(() => {
    store = mockStore([]);
  });

  it("fetches all posts", async () => {
    httpService.get.mockResolvedValue({ data: getMockData });

    const expectedActions = [{ type: Types.FETCH_POSTS, payload: getMockData }];

    await store.dispatch(actions.fetch());

    expect(store.getActions()).toEqual(expectedActions);
  });

  it("creates a post", async () => {
    httpService.create.mockResolvedValue({ data: postMockData });

    const expectedActions = [
      { type: Types.CREATE_POST, payload: postMockData }
    ];

    await store.dispatch(actions.create(postMockData));

    expect(store.getActions()).toEqual(expectedActions);
  });

  it("updates a post", async () => {
    httpService.update.mockResolvedValue({ data: putMockData });

    const expectedActions = [{ type: Types.UPDATE_POST, payload: putMockData }];

    await store.dispatch(actions.update(putMockData));

    expect(store.getActions()).toEqual(expectedActions);
  });

  it("removes a post", async () => {
    httpService.remove.mockResolvedValue(deleteMockData);

    const expectedActions = [{ type: Types.REMOVE_POST, id: 123 }];

    await store.dispatch(actions.remove(123));

    expect(store.getActions()).toEqual(expectedActions);
  });
});
