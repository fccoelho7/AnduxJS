module.exports = [
  {
    type: "input",
    name: "name",
    message: "Name: (Ex.: 'users')"
  },
  {
    type: "input",
    name: "endpoint",
    message: "API Endpoint: (Ex.: '/users')"
  },
  {
    type: "list",
    name: "fields",
    message: "Type comma-separated fields: (Ex.: 'name, surname, age')"
  }
];
