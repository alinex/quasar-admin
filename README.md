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

# run the productive web
$ npm start

# serve development and electron development
$ npm run electron-dev

# build electron applications
$ npm run electron-build
```
