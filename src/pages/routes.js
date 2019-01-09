import * as Pages from "./";

export default [
  { path: "/", exact: true, component: Pages.Dashboard },
  /* For protected routes, use: protected: true */
  { path: "/posts", component: Pages.Posts, protected: true },
  { path: "/login", component: Pages.Login },
  { path: "*", component: Pages.NotFound }
];
