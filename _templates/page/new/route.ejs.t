---
inject: true
to: src/view/routes.js
after: default
---
  { path: "/<%= name %>", component: getPage("<%= name %>") },