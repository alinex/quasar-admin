# Admin Panel

> An interface to make operation tasks easy and fast.

## Next steps

- implement authentication
  - check login with jwt
  - forgotten password
  - user entry in toolbar
    - logout
    - profile
  - client auth api
    - mock with local database  
    - using jwt to server

- test menu
  - about entry

- server connection
  - node-admin server
    - based on feathers, hapi or exchange
  - rest server
  - asking for server date
  - date page display client, server date and difference

## Architecture

The application consists of two components:

1. The **Frontend** (this module) which is used as the interface for the user on any device.
2. **[REST Server](https://github.com/alinex/node-admin)** which holds the data for the frontend display.

The Frontend itself may be hosted on the same webserver as the REST Server or on
any other static server. It may also be used ass desktop or mobile-app.

## Technologies

- [Vue.js](https://vuejs.org/v2/guide/installation.html) as the base technology for the client interface
- [vue-router](https://router.vuejs.org/en/) for client side routing
- [Quasar Framework](http://quasar-framework.org/guide/) components and base structure with electron and cordova integration
- [Vuelidate](https://monterail.github.io/vuelidate/#getting-started) for form validation
- [Axios](https://github.com/axios/axios) HTTP client library
- [JWT](https://jwt.io/#debugger) JSON Web Token for authentication
- [Stylus](http://stylus-lang.com/) CSS language

## Managing Development Environment

``` bash
# install dependencies
$ npm install

# serve with hot reload at localhost:8080
$ npm run dev

# lint code
$ npm run lint

# build for production with minification
$ npm run build

# run the productive web at localhost:3000 and localhost:3001 (BrowserSync)
$ npm start

# serve development and electron development
$ npm run electron-dev

# build electron applications
$ npm run electron-build
```

## License

(C) Copyright 2018 Alexander Schilling

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

>  <https://www.apache.org/licenses/LICENSE-2.0>

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
