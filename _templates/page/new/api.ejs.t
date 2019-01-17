---
to: src/view/pages/<%= Name %>/reducer/api.js
---
import http from "../../../../services/http";

const namespace = "<%= endpoint %>";

const api = {
  get() {
    return http.get(namespace);
  },
  create(data) {
    return http.post(namespace, data);
  },
  update(id, data) {
    return http.put(`${namespace}/${id}`, data);
  },
  remove(id) {
    return http.delete(`${namespace}/${id}`);
  }
};

export default api;
