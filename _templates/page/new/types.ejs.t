---
to: src/view/pages/<%= Name %>/reducer/types.js
---
<% type = name.toUpperCase() %>
export const FETCH = "FETCH_<%= type %>";
export const CREATE = "CREATE_<%= type %>";
export const UPDATE = "UPDATE_<%= type %>";
export const REMOVE = "REMOVE_<%= type %>";
