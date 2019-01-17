---
to: src/view/pages/<%= Name %>/reducer/actions.js
---
import api from "./api";
import * as Types from "./types";

export const fetch = () => async dispatch => {
  const { data } = await api.get();
  dispatch({ type: Types.FETCH, payload: data });
};

export const create = payload => async dispatch => {
  const { data } = await api.create(payload);
  dispatch({ type: Types.CREATE, payload: data });
};

export const update = payload => async dispatch => {
  const { data } = await api.update(payload.id, payload);
  dispatch({ type: Types.UPDATE, payload: data });
};

export const remove = id => async dispatch => {
  await api.remove(id);
  dispatch({ type: Types.REMOVE, id });
};
