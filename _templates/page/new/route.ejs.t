---
inject: true
to: src/pages/routes.js
after: default
---
  { path: "/<%= name %>", component: getPage("<%= name %>") },