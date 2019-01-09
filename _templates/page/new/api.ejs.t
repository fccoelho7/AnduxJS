---
to: src/pages/<%= Name %>/reducer/api.js
---
import fetch from "../../../services/http";

const apiService = {
  get() {
    return fetch.get("<%= endpoint %>");
  },
  create(data) {
    return fetch.post("<%= endpoint %>", data);
  },
  update(id, data) {
    return fetch.put(`<%= endpoint %>/${id}`, data);
  },
  remove(id) {
    return fetch.delete(`<%= endpoint %>/${id}`);
  }
};

export default apiService;
