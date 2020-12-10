# full-stack-exercise

## Introduction

This is a simple full stack [React](https://reactjs.org/) application with a [Node.js](https://nodejs.org/en/) and [Express](https://expressjs.com/) backend.
Client side code is written in React and the backend API is written using Express.
Database is handled by [better-sqlite3](https://github.com/JoshuaWise/better-sqlite3) library for SQLite3 in Node.js.
[Bootstrap](https://getbootstrap.com/docs/4.5/components/forms/) is imported to quickly design components.

### Development mode

In the development mode, we will have 2 servers running. The front end code will be served by the [webpack dev server](https://webpack.js.org/configuration/dev-server/) which helps with hot and live reloading. The server side Express code will be served by a node server using [nodemon](https://nodemon.io/) which helps in automatically restarting the server whenever server side code changes.

## Quick Start

```bash
# Go inside the directory
cd full-stack-exercise

# Install dependencies
npm install

# Setup SQLite3 database
npm run setup-db

# Start development server
npm run dev
```

## Documentation

### Folder Structure

All the source code will be inside **src** directory. Inside src, there is client and server directory. All the frontend code (react, css, js and any other assets) will be in client directory. Backend Node.js/Express code will be in the server directory.

### Webpack dev server

[Webpack dev server](https://webpack.js.org/configuration/dev-server/) is used along with webpack. It provides a development server that provides live reloading for the client side code. This should be used for development only.

The devServer section of webpack.config.js contains the configuration required to run webpack-dev-server which is given below.

```javascript
devServer: {
    port: 3000,
    open: true,
    proxy: {
        "/api": "http://localhost:8080"
    }
}
```

[**Port**](https://webpack.js.org/configuration/dev-server/#devserver-port) specifies the Webpack dev server to listen on this particular port (3000 in this case).
When [**open**](https://webpack.js.org/configuration/dev-server/#devserver-open) is set to `true`, it will automatically open the home page on startup.
[**Proxying**](https://webpack.js.org/configuration/dev-server/#devserver-proxy) URLs can be useful when we have a separate API backend development server and we want to send API requests on the same domain. In our case, we have a Node.js/Express backend where we want to send the API requests to.

### Database

After running `npm run setup-db`, a `.db` file is created in `/src/server/database` directory. You can use [sqlite viewer](https://inloop.github.io/sqlite-viewer/) to visualize data.

![data model](./data-model.png "Data model")

> `vacancy.contract_type` must be one of `['cdi', 'cdd', 'internship']`

> `vacancy.status` must be one of `['opened', 'closed']`

> `application.status` must be one of `['to_call', 'to_meet', 'recruited', 'abandoned']`

## Just tell me what to do!

### Initial state

First time you run the project, you should see a select input to choose which vacancy you want to deep dive in. Once selected, a list of applications should be displayed.

### Your job

We want our hiring managers to be able to:

-   see applications in kanban using status as column
-   add a comment on an application
-   update application status and comment
-   [Bonus] easily identify opened vacancies

Please let me know if you have any questions
Martin de la Taille: martin@flatchr.io>
