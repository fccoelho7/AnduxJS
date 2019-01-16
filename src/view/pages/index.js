export default {
  posts: {
    component: require('./Posts').default,
    reducer: require('./Posts/reducer').default,
  },
  login: { component: require('./Auth/Login').default },
};
