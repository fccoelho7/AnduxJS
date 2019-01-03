import postsService from "./posts-service";

// Actions
export const Types = {
  FETCH_POSTS: "FETCH_POSTS",
  CREATE_POST: "CREATE_POST",
  UPDATE_POST: "UPDATE_POST",
  REMOVE_POST: "REMOVE_POST"
};

const INITIAL_STATE = {
  list: []
};

// Reducers
export default (state = INITIAL_STATE, action = {}) => {
  switch (action.type) {
    case Types.FETCH_POSTS:
      return {
        ...state,
        list: action.payload
      };
    case Types.CREATE_POST:
      return {
        ...state,
        list: [...state.list, action.payload]
      };
    case Types.UPDATE_POST:
      return {
        ...state,
        list: state.list.map(item =>
          item.id !== action.payload.id
            ? item
            : {
                ...item,
                ...action.payload
              }
        )
      };
    case Types.REMOVE_POST:
      return {
        ...state,
        list: state.list.filter(item => item.id !== action.id)
      };
    default:
      return state;
  }
};

// Action Creators
export const actions = {
  fetch: () => async dispatch => {
    const { data } = await postsService.get();
    dispatch({ type: Types.FETCH_POSTS, payload: data });
  },

  create: payload => async dispatch => {
    const { data } = await postsService.create(payload);
    dispatch({ type: Types.CREATE_POST, payload: data });
  },

  update: payload => async dispatch => {
    const { data } = await postsService.update(payload.id, payload);
    dispatch({ type: Types.UPDATE_POST, payload: data });
  },

  remove: id => async dispatch => {
    await postsService.remove(id);
    dispatch({ type: Types.REMOVE_POST, id });
  }
};
