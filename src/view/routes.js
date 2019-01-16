import pages from "./pages";

const getPage = name => pages[name].component;

/* For protected routes, use: protected: true */

export default [
  { path: "/posts", component: getPage("posts"), protected: true },
  { path: "/auth/login", component: getPage("login") }
];
