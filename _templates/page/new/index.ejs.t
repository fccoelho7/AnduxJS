---
to: src/view/pages/<%= Name %>/index.js
---
import { connect } from "react-redux";
import { actions } from "./reducer";
import View from "./View";

const mapStateToProps = state => ({
  <%= name %>: state.<%= name %>.list
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
)(View);
