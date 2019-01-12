module.exports = [
  {
    type: "input",
    name: "name",
    message: "Name:",
    initial: "users"
  },
  {
    type: "input",
    name: "endpoint",
    message: "Endpoint:",
    initial: "/users"
  },
  {
    type: "list",
    name: "fields",
    message: "Comma-separated fields:",
    initial: "name, age"
  }
];
