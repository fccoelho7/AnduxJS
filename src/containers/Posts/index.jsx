import React from "react";
import { connect } from "react-redux";
import View from "./View";

const Container = props => <View {...props} />;

const mapStateToProps = store => ({ posts: store.posts.list });

export default connect(mapStateToProps)(Container);
