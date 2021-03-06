# Gameori
Gameori is a Node app built with MongoDB and Angular. Node provides the RESTful API. Angular provides the frontend and accesses the API. MongoDB stores data.

Gameori aims to review the latest games and at the same time promoting the product to the user.

## Prerequisites
* Node.js - Download and Install [Node.js](http://www.nodejs.org/download/).
* MongoDB - Download and Install [MongoDB](http://docs.mongodb.org/manual/installation/) - Make sure `mongod` is running on the default port (27017).

### Tools Prerequisites
* NPM - Node.js package manage; should be installed when you install node.js.
* Bower - Web package manager. Installing [Bower](http://bower.io/) is simple when you have `npm`:

```
$ [sudo] npm install -g bower
```

* Nodemon - Utility that will monitor for any changes in your source and automatically restart your server.

```
$ [sudo] npm install -g nodemon
```

## Additional Packages
* BodyParser - Defined as npm module in the [package.json](package.json) file.
* Connect-Multiparty - Defined as npm module in the [package.json](package.json) file.
* Express - Defined as npm module in the [package.json](package.json) file.
* Mongoose - Defined as npm module in the [package.json](package.json) file.
* Path - Defined as npm module in the [package.json](package.json) file.
* AngularJS - Defined as bower module in the [bower.json](bower.json) file.
* Bootstrap - Defined as bower module in the [bower.json](bower.json) file.
* Font Awesome - Defined as bower module in the [bower.json](bower.json) file.
* JQuerry - Defined as bower module in the [bower.json](bower.json) file.

## Import Database
  1. mongodump
  ```
  mongorestore -d gameori database/mongodump/
  ```

  2. rockmongo
  ```
  install rockmongo and import collection (JS File)
  ```

## Quick Install
  Install dependencies:

    $ [sudo] npm install

  Bower dependencies:

    $ [sudo] bower install

  Run server:

    $ nodemon

  Alternatively, when not using nodemon (and for production environments) you can run:

    $ node server

  Then, open a browser and go to:

    http://localhost:3000

## Sources
1. [Node Todo App](https://github.com/scotch-io/node-todo)
2. [MEAN Stack on OpenShift](https://github.com/linnovate/mean-on-openshift)

## Templates
1. [SB Admin](http://startbootstrap.com/template-overviews/sb-admin)
2. [Games Center - W3Layouts](https://w3layouts.com/games-center-a-games-category-flat-bootstrap-responsive-web-template)
3. [Simple Login Form](https://colorlib.com/wp/html5-and-css3-login-forms)
