import * as Pages from "./";

export default [
  { path: "/", component: Pages.Dashboard },
  { path: "/posts", component: Pages.Posts },
  { path: "*", component: Pages.NotFound }
];
