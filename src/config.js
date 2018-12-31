const prod = {
  apiBaseUrl: "https://your-domain.com/api"
};

const dev = {
  apiBaseUrl: "http://localhost:3001"
};

const config = process.env.REACT_APP_STAGE === "production" ? prod : dev;

export default config;
