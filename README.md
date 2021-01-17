# Login Page Form Submission

This is a ReactJS project which has sign up and login functionality with authentication backend made during NodeJS training

# Features

- Login - On Sucessfully logging in a dummy component of Todo List
- Sign Up - Page where user can sign Up in the application
- Authentication backend hosted on heroku
- Todo Dummy Component uses todo backend also hosted on heroku

## Downloading and Running on localhost

- Clonning the repo

```
$ git clone https://github.com/mistycal98/react-form-login.git
```

- Downloading Dependencies
  `$ npm i` or `yarn install`

- Running in development mode
  `$ npm run start` or `yarn start`

## Folder Structure

```
.
├── package.json
├── public
│   ├── favicon.ico
│   ├── index.html
│   ├── logo192.png
│   ├── logo512.png
│   ├── manifest.json
│   └── robots.txt
├── README.md
├── src
│   ├── api
│   │   └── apiCall.js
│   ├── App.js
│   ├── App.test.js
│   ├── components
│   │   ├── assets
│   │   ├── Footer.jsx
│   │   ├── Instruction.jsx
│   │   ├── LoginForm.jsx
│   │   ├── Navigation.jsx
│   │   ├── RegisterForm.jsx
│   │   ├── styles
│   │   └── Todo.jsx
│   ├── index.css
│   ├── index.js
│   ├── logo.svg
│   ├── pages
│   │   ├── About.jsx
│   │   ├── Dashboard.jsx
│   │   ├── Home.jsx
│   │   ├── Login.jsx
│   │   └── Register.jsx
│   ├── reportWebVitals.js
│   ├── routes
│   │   └── router.js
│   └── setupTests.js
└── yarn.lock
```

# Live Hosted on

- Heroku [Learn more](https://www.heroku.com)<br>
  - [Authentication-Backend](https://authentication-node.herokuapp.com)
  - [Todo-Backend](https://todo-list-api-endpoints.herokuapp.com)
- Vercel - makes a build for optimized performance [Learn more](https://vercel.com)<br>
  - [React-form-Login-Todo](https://react-form-login.vercel.app)
