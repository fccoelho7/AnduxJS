# AnduxJS [![Build Status](https://travis-ci.org/fccoelho7/andux.svg?branch=master)](https://travis-ci.org/fccoelho7/andux)

A React + Redux modular, scalable, easily and friendly framework.

- [Main Features](#main-features)
- [Scaffolding](#scaffolding)
- [Structure](#structure)

## Quick Overview

```bash
git clone git@github.com:fccoelho7/andux.git && cd andux/
yarn && yarn start
```

## Main features

- [Ant Design](https://ant.design/) 😍
- [Axios](https://github.com/axios/axios)
- [Create React App](https://github.com/facebook/create-react-app)
- [Immutability Helper](https://github.com/kolodny/immutability-helper)
- [JSON Server](https://github.com/typicode/json-server)
- [React Router](https://reacttraining.com/react-router/web/guides/quick-start)
- [Redux Thunk](https://github.com/reduxjs/redux-thunk)

### For Specs

- [Enzyme](https://airbnb.io/enzyme/)
- [Jest](http://jest.io)

## Scaffolding

To generate new pages dynamically, just execute:

```sh
yarn andux:new:page
```

## Structure

```bash
├── src
│   ├── components
│   │   ├── Listable.jsx
│   │   ├── ModalForm.jsx
│   │   └── ProtectedRoute.jsx
│   ├── config.js
│   ├── index.js
│   ├── layouts
│   │   └── default
│   ├── locales
│   │   └── en.json
│   ├── pages
│   │   ├── Auth
│   │   ├── Dashboard
│   │   ├── Page404.jsx
│   │   ├── Posts
│   │   ├── Root.jsx
│   │   ├── index.js
│   │   └── routes.js
│   ├── services
│   │   ├── auth.js
│   │   └── http.js
│   ├── setupTests.js
│   ├── store.js
│   └── utils
```
