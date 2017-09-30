# NgBookStore

This e-commerce Single Page Application project is a built on the MEAN Stack (Mongo, Express, Angular 2, Node) . It shows how to do CRUD operation with Mongo DB and nested router control for Angular 2. 


### User Section

Homepage

![screen shot 2017-07-27 at 11 46 18 am](https://user-images.githubusercontent.com/31406525/31040321-6c147dfe-a5c9-11e7-930d-ed14c903f679.png)

Products

![screen shot 2017-07-27 at 11 46 02 am](https://user-images.githubusercontent.com/31406525/31040324-74f72a98-a5c9-11e7-969f-74b6a0c710a7.png)

About Us

![screen shot 2017-07-27 at 11 46 47 am](https://user-images.githubusercontent.com/31406525/31040328-79a6d9da-a5c9-11e7-8427-822eef307840.png)

Product Description

![screen shot 2017-07-27 at 11 47 06 am](https://user-images.githubusercontent.com/31406525/31040349-bf13db12-a5c9-11e7-9043-c36f7e89138c.png)

Shopping Cart 

![screen shot 2017-09-30 at 10 30 18 am](https://user-images.githubusercontent.com/31406525/31040407-79cb9670-a5ca-11e7-8735-36514d4c799a.png)


### Admin Section

Products in Database

![screen shot 2017-07-27 at 11 48 01 am](https://user-images.githubusercontent.com/31406525/31040357-d50815dc-a5c9-11e7-822b-97dd868ac52c.png)

Add Products.

![screen shot 2017-07-27 at 11 48 19 am](https://user-images.githubusercontent.com/31406525/31040358-d76a3f9e-a5c9-11e7-9796-e296d87baa7e.png)



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
