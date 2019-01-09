import * as Types from "./types";
import api from "./api";

export const fetch = () => async dispatch => {
  const { data } = await api.get();
  dispatch({ type: Types.FETCH_POSTS, payload: data });
};

export const create = payload => async dispatch => {
  const { data } = await api.create(payload);
  dispatch({ type: Types.CREATE_POST, payload: data });
};

export const update = payload => async dispatch => {
  const { data } = await api.update(payload.id, payload);
  dispatch({ type: Types.UPDATE_POST, payload: data });
};

export const remove = id => async dispatch => {
  await api.remove(id);
  dispatch({ type: Types.REMOVE_POST, id });
};
