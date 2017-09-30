# NgBookStore

This e-commerce Single Page Application project is a built on the MEAN Stack (Mongo, Express, Angular 2, Node) . It shows how to do CRUD operation with Mongo DB and nested router control for Angular 2. 


### User Section




### Admin Section



## Development server
Navigate to the project folder and run `npm install`. Make sure you have `mongo` installed on your machine or simply do `sudo npm install -g mongo` and create a local database and a collection called `ngProducStore` and `books` respectively.

#### Creat a database
`use ngProductStore`

#### Create a collection
`db.createCollection('books')`

 Do `node server.js` and run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.
