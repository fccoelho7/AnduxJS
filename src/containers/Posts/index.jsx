import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { actionCreators } from "./posts";
import View from "./View";

const Container = props => <View {...props} />;

const mapStateToProps = store => ({ posts: store.posts });

const mapDispatchToProps = dispatch =>
  bindActionCreators(actionCreators, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Container);
