import axios from "axios";
import config from "../config";

export default axios.create({
  baseURL: config.api.baseUrl,
  headers: {
    Authorization: window.localStorage.token || "Bearer undefined"
  }
});
