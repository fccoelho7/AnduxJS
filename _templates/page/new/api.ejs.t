---
to: src/pages/<%= Name %>/reducer/api.js
---
import fetch from "../../../services/http";

const API_ENDPOINT = "<%= endpoint %>";

const api = {
  get() {
    return fetch.get(API_ENDPOINT);
  },
  create(data) {
    return fetch.post(API_ENDPOINT, data);
  },
  update(id, data) {
    return fetch.put(`/${API_ENDPOINT}/${id}`, data);
  },
  remove(id) {
    return fetch.delete(`/${API_ENDPOINT}/${id}`);
  }
};

export default api;

