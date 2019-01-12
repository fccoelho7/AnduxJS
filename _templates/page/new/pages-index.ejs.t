---
inject: true
to: src/pages/index.js
after: export
---
  <%= name %>: {
    component: require("./<%= Name %>").default,
    reducer: require("./<%= Name %>/reducer").default
  },