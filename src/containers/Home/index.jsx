import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { actionCreators } from "./todos";
import View from "./View";

const Container = props => <View {...props} />;

const mapStateToProps = store => ({ todos: store.todos });

const mapDispatchToProps = dispatch =>
  bindActionCreators(actionCreators, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Container);
