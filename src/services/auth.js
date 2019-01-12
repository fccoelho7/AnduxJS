const authService = {
  isAuthenticated: true,

  authenticate(cb) {
    this.isAuthenticated = true;
    cb();
  },

  signout(cb) {
    this.isAuthenticated = false;
    cb();
  }
};

export default authService;
