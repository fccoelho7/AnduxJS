// Actions
const FETCH_POSTS = "FETCH_POSTS";
const CREATE_POST = "CREATE_POST";
const UPDATE_POST = "UPDATE_POST";
const REMOVE_POST = "REMOVE_POST";

// Reducers
export default (
  state = [{ id: 0, title: "Example", done: true }],
  action = {}
) => {
  switch (action.type) {
    case CREATE_POST:
      return [
        ...state,
        {
          id: Math.floor(Math.random() * 100),
          title: action.payload.title,
          done: action.payload.done || false
        }
      ];
    case UPDATE_POST:
      return state.map(item =>
        item.id !== action.id ? item : { ...item, ...action.payload }
      );
    case REMOVE_POST:
      return state.filter(item => item.id !== action.id);
    default:
      return state;
  }
};

// Action Creators
export const actionCreators = {
  fetch() {
    return { type: FETCH_POSTS };
  },

  create(payload) {
    return { type: CREATE_POST, payload };
  },

  update(id, payload) {
    return { type: UPDATE_POST, id, payload };
  },

  remove(id) {
    return { type: REMOVE_POST, id };
  }
};
