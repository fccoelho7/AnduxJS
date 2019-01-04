import fetch from "../../../services/http";

const postsService = {
  get() {
    return fetch.get("/posts");
  },
  create(data) {
    return fetch.post("/posts", data);
  },
  update(id, data) {
    return fetch.put(`/posts/${id}`, data);
  },
  remove(id) {
    return fetch.delete(`/posts/${id}`);
  }
};

export default postsService;
