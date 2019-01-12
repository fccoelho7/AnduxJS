import * as pages from "./";

const getPage = name => pages[name].component;

/* For protected routes, use: protected: true */

export default [
  { path: "/auth/login", component: getPage("login") },
  { path: "/posts", component: getPage("posts"), protected: true }
];
