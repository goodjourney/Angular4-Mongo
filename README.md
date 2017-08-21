# MEAN Tour of Heroes

Credit to [Davide Violante](https://github.com/DavideViolante/Angular-Full-Stack) as I used that repo as a reference.

This frontend was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.3.0.

This project adds a server side to the Angular 4 Tour of Heroes tutorial and it uses the [MEAN stack](https://en.wikipedia.org/wiki/MEAN_(software_bundle)):
* [**M**ongoose.js](http://www.mongoosejs.com) ([MongoDB](https://www.mongodb.com)): database
* [**E**xpress.js](http://expressjs.com): backend framework
* [**A**ngular 4+](https://angular.io): frontend framework
* [**N**ode.js](https://nodejs.org): runtime environment

## Prerequisites
1. Install [Node.js](https://nodejs.org) and [MongoDB](https://www.mongodb.com)
2. Install Angular CLI: `npm i -g @angular/cli`
3. From project root folder install all the dependencies: `npm i`

## Run
### Development mode
`npm run dev`: [concurrently](https://github.com/kimmobrunfeldt/concurrently) execute MongoDB, Angular build, TypeScript compiler and Express server.

A window will automatically open at [localhost:4200](http://localhost:4200). Angular and Express files are being watched. Any change automatically creates a new bundle, restart Express server and reload your browser.

### Production mode
`npm run prod`: run the project with a production bundle and AOT compilation listening at [localhost:3000](http://localhost:3000) 

## Deploy (Heroku)
1. Go to Heroku and create a new app
2. Install [Heroku CLI](https://devcenter.heroku.com/articles/heroku-command-line)
3. `heroku login`
4. `cd my-project/`
5. `git init`
6. `heroku git:remote -a your-app-name`
7. Download this repo and copy all files into `my-project` folder
8. Edit `.gitignore` and remove line with `/dist`
9. Edit `.env` and replace the MongoDB URI with a real remote MongoDB server. You can create a MongoDB server with Heroku or mLab.
10. `npm i`
11. `ng build -prod` or `ng build -aot -prod`
12. `tsc -p server`
13. `git add .`
14. `git commit -m "Going to Heroku"`
15. `git push heroku master`
16. `heroku open`
17. A window will open with your app online

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
