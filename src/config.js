const config = {
  name: "my-app",
  api: {
    baseUrl: "http://localhost:3001",
    auth: {
      namespace: "/auth",
      login: "/login",
      signup: "/signup",
      logout: "/logout"
    }
  }
};

const dev = {
  ...config
};

const prod = {
  ...config,
  api: {
    ...config.api,
    baseUrl: "https://your-domain.com/api"
  }
};

export default (process.env.REACT_APP_STAGE === "production" ? prod : dev);
