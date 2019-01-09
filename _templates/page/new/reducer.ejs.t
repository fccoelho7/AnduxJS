---
to: src/pages/<%= Name %>/reducer/index.js
---
import update from "immutability-helper";
import * as Types from "./types";
import * as actions from "./actions";

const INITIAL_STATE = {
  list: []
};

export default (state = INITIAL_STATE, action = {}) => {
  switch (action.type) {
    case Types.FETCH:
      return {
        list: action.payload
      };

    case Types.CREATE:
      return update(state, { list: { $push: [action.payload] } });

    case Types.UPDATE:
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

    case Types.REMOVE:
      return update(state, {
        list: { $apply: list => list.filter(item => item.id !== action.id) }
      });

    default:
      return state;
  }
};

export { Types, actions };
