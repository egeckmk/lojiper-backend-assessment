# Lojiper Backend Assessment

This project was designed and implemented for use in the recruitment process. The purpose of the project is a small ticket purchasing application. It contains the APIs necessary for this purpose.

## Installing necessary dependencies

First you need to download the dependencies after copying the project to your local device.

You can install the necessary dependency packages using one of the following commands.

```
npm install
// or
npm i
```

## Making necessary configurations

Then you need to create an ".env" file in the main directory of the project and add it to this file as in the following format.

```
// The port number where the project will run.
PORT=0000

// MongoDB connection url
MONGODB_URL=mongodb://username:password@localhost:27017/mydatabase

// Secret key required for jsonwebtoken library
JWT_SECRET_KEY=YOUR_JWT_SECRET_KEY
```

## Creation of test data in the database

At this stage, the project is now running, but there is no sample data in the database. If you want to add sample bus schedules, you need to activate the code in the comment line in the `~/config/db.js` file in the project

To do this, remove the following code from the comment line, run it once and run it again after putting it back in the comment line.

```js
// busSeeder();
```

You can use the following command to start the project.

```
npm start
```

API Documentation [=> Go](APIDocumentation.md)
