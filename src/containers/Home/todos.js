import produce from "immer";

// TODO: Move to a helper file.
function getActionPath(action) {
  return `my-app/todos/${action}`;
}

// Actions
const GET = getActionPath("GET");
const CREATE = getActionPath("CREATE");
const UPDATE = getActionPath("UPDATE");
const DELETE = getActionPath("DELETE");

// Reducer
export default (state = [], action = {}) =>
  produce(state, draft => {
    switch (action.type) {
      case CREATE:
        draft.push(action.payload);
        break;
      case UPDATE:
        draft[action.index] = {
          ...draft[action.index],
          ...action.payload
        };
        break;
      case DELETE:
        draft.splice(action.index, 1);
        break;
      default:
        return state;
    }
  });

// Action Creators
export const actionCreators = {
  get() {
    return { type: GET };
  },

  create(payload) {
    return { type: CREATE, payload };
  },

  update(index, payload) {
    return { type: UPDATE, index, payload };
  },

  remove(index) {
    return { type: DELETE, index };
  }
};
