import httpService from "./http-service";
import * as Types from "./types";

export const fetch = () => async dispatch => {
  const { data } = await httpService.get();
  dispatch({ type: Types.FETCH_POSTS, payload: data });
};

export const create = payload => async dispatch => {
  const { data } = await httpService.create(payload);
  dispatch({ type: Types.CREATE_POST, payload: data });
};

export const update = payload => async dispatch => {
  const { data } = await httpService.update(payload.id, payload);
  dispatch({ type: Types.UPDATE_POST, payload: data });
};

export const remove = id => async dispatch => {
  await httpService.remove(id);
  dispatch({ type: Types.REMOVE_POST, id });
};
