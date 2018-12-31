import postsService from "./posts-service";

// Actions
export const Types = {
  FETCH_POSTS: "FETCH_POSTS",
  CREATE_POST: "CREATE_POST",
  UPDATE_POST: "UPDATE_POST",
  REMOVE_POST: "REMOVE_POST"
};

// Reducers
export default (state = [], action = {}) => {
  switch (action.type) {
    case Types.FETCH_POSTS:
      return action.payload;
    case Types.CREATE_POST:
      return [
        ...state,
        {
          id: Math.floor(Math.random() * 100),
          title: action.payload.title,
          done: action.payload.done || false
        }
      ];
    case Types.UPDATE_POST:
      return state.map(item =>
        item.id !== action.id ? item : { ...item, ...action.payload }
      );
    case Types.REMOVE_POST:
      return state.filter(item => item.id !== action.id);
    default:
      return state;
  }
};

// Action Creators
export const actionCreators = {
  fetch: () => async dispatch => {
    const { data } = await postsService.get();
    dispatch({ type: Types.FETCH_POSTS, payload: data.payload });
  },

  create: payload => async dispatch => {
    const { data } = await postsService.create(payload);
    dispatch({ type: Types.CREATE_POST, payload: data.payload });
  },

  update: (id, payload) => async dispatch => {
    const { data } = await postsService.update(id, payload);
    dispatch({ type: Types.UPDATE_POST, payload: data.payload });
  },

  remove: id => async dispatch => {
    await postsService.remove(id);
    dispatch({ type: Types.REMOVE_POST, id });
  }
};
