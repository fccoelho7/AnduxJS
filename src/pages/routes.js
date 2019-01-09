import * as Pages from "./";

export default [
  { path: "/", exact: true, component: Pages.Dashboard },
  { path: "/posts", component: Pages.Posts },
  { path: "*", component: Pages.NotFound }
];
