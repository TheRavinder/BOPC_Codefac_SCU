# NgBookStore

This e-commerce Single Page Application project is a built on the MEAN Stack (Mongo, Express, Angular 2, Node) in order to help anyone who is trying to learn how these Javascript technologies work together. It shows how to do CRUD operation with Mongo DB and nested router control for Angular 2. 

For simplicy, authentication is not implemented. I will be doing a separate project to demonstrate that feature soon. 


### User Section

![screen shot 2017-01-15 at 11 34 34 pm](https://cloud.githubusercontent.com/assets/19909685/21962926/bce698b6-db7b-11e6-950a-da02f47eab35.png)

![screen shot 2017-01-15 at 11 36 23 pm](https://cloud.githubusercontent.com/assets/19909685/21962989/16e97f62-db7d-11e6-9dd8-7abff8b3e303.png)

![screen shot 2017-01-15 at 11 50 38 pm](https://cloud.githubusercontent.com/assets/19909685/21963003/7f7862b4-db7d-11e6-9daa-90b50d4b87b5.png)


### Admin Section

![screen shot 2017-01-15 at 11 50 54 pm](https://cloud.githubusercontent.com/assets/19909685/21963008/97258f54-db7d-11e6-8f4a-fa4878524afc.png)

![screen shot 2017-01-15 at 11 37 45 pm](https://cloud.githubusercontent.com/assets/19909685/21963009/a1a4e15a-db7d-11e6-95d2-01d832f29908.png)


## Development server
Navigate to the project folder and run `npm install`. Make sure you have `mongo` installed on your machine or simply do `sudo npm install -g mongo` and create a local database and a collection called `ngBookStore` and `books` respectively.

#### Creat a database
`use ngBookStore`

#### Create a collection
`db.createCollection('books')`

Run `npm install` in the `backend` folder and do `node server.js` before navigating back to the project folder and run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.
