<p align="center">
  <img src="https://user-images.githubusercontent.com/4829072/51246168-e1647700-1970-11e9-9279-7904e6764d87.png" width="350" />
</p>
<p align="center">A React + Redux modular, scalable, easy and friendly framework.</p>
<p align="center">
  <a href="https://travis-ci.org/fccoelho7/AnduxJS" target="_blank">
    <img src="https://travis-ci.org/fccoelho7/AnduxJS.svg?branch=master" />
  </a>
</p>

## 📟 Quick Overview

```bash
git clone git@github.com:fccoelho7/andux.git && cd andux/
yarn && yarn start
```

## 🎩 Features

- [Ant Design](https://ant.design/) 😍
- [Axios](https://github.com/axios/axios)
- [Create React App](https://github.com/facebook/create-react-app)
- [Immutability Helper](https://github.com/kolodny/immutability-helper)
- [JSON Server](https://github.com/typicode/json-server)
- [React Router](https://reacttraining.com/react-router/web/guides/quick-start)
- [Redux Thunk](https://github.com/reduxjs/redux-thunk)

### 🐞 For Specs

- [Enzyme](https://airbnb.io/enzyme/)
- [Jest](http://jest.io)

## 🤔 Why?

If you look around you'll see applications have the same behaviors, almost all have the same CRUD (create, read, update and delete) logic and for us, developers, it's boring having to create always the same architecture and functionalities.

## 🚀 Scaffolding

To generate new pages dynamically, just execute:

```sh
yarn andux:new:page
```

## 📂 Structure

```bash
├── README.md
├── _templates
│   └── page
│       └── new
├── db.json
├── node_modules [1226 entries exceeds filelimit, not opening dir]
├── package.json
├── public
│   ├── favicon.ico
│   ├── index.html
│   └── manifest.json
├── src
│   ├── config.js
│   ├── index.js
│   ├── locales
│   │   └── en.json
│   ├── services
│   │   ├── auth.js
│   │   └── http.js
│   ├── setupTests.js
│   ├── store.js
│   ├── utils
│   │   ├── getAllReducers.js
│   │   └── getAllReducers.test.js
│   └── view
│       ├── components
│       ├── layouts
│       ├── pages
│       └── routes.js
├── yarn-error.log
└── yarn.lock
```
