---
inject: true
to: src/pages/routes.js
after: export
---
  { path: "/<%= name %>", component: Pages.<%= Name %> },