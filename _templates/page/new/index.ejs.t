---
to: src/pages/<%= Name %>/index.jsx
---
import React from "react";
import { connect } from "react-redux";
import { actions } from "./reducer";
import View from "./View";

const Container = props => <View {...props} />;

const mapStateToProps = store => ({
  <%= name %>: store.<%= name %>.list
});

const mapDispatchToProps = dispatch => ({
  fetch: () => dispatch(actions.fetch()),
  create: data => dispatch(actions.create(data)),
  update: data => dispatch(actions.update(data)),
  remove: id => dispatch(actions.remove(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Container);