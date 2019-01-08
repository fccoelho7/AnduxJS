import update from "immutability-helper";
import * as Types from "./types";
import * as actions from "./actions";

const INITIAL_STATE = {
  list: []
};

export default (state = INITIAL_STATE, action = {}) => {
  switch (action.type) {
    case Types.FETCH_POSTS:
      return {
        list: action.payload
      };

    case Types.CREATE_POST:
      return update(state, { list: { $push: [action.payload] } });

    case Types.UPDATE_POST:
      return update(state, {
        list: {
          $apply: list =>
            list.map(item =>
              item.id !== action.payload.id
                ? item
                : {
                    ...item,
                    ...action.payload
                  }
            )
        }
      });

    case Types.REMOVE_POST:
      return update(state, {
        list: { $apply: list => list.filter(item => item.id !== action.id) }
      });

    default:
      return state;
  }
};

export { Types, actions };
