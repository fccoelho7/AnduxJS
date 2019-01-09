const prod = {
  apiBaseUrl: "https://your-domain.com/api"
};

const dev = {
  apiBaseUrl: "http://localhost:3001"
};

export default (process.env.REACT_APP_STAGE === "production" ? prod : dev);
