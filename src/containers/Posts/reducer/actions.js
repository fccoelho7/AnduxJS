import httpService from "./http-service";
import Types from "./types";

export default {
  fetch: () => async dispatch => {
    const { data } = await httpService.get();
    dispatch({ type: Types.FETCH_POSTS, payload: data });
  },

  create: payload => async dispatch => {
    const { data } = await httpService.create(payload);
    dispatch({ type: Types.CREATE_POST, payload: data });
  },

  update: payload => async dispatch => {
    const { data } = await httpService.update(payload.id, payload);
    dispatch({ type: Types.UPDATE_POST, payload: data });
  },

  remove: id => async dispatch => {
    await httpService.remove(id);
    dispatch({ type: Types.REMOVE_POST, id });
  }
};
