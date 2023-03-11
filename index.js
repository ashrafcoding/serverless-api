require("dotenv").config();
const serverless = require("serverless-http");
const express = require("express");
const app = express();
var cors = require("cors");
const mongoose = require("mongoose");
const bugRouter = require("./bugRoute");
const {schema} = require('./graphql-schema')
const {graphqlHTTP} = require('express-graphql')


const connection = async () => {
  await mongoose.connect(process.env.DB_URL, {
    useNewUrlParser: true,
  });
  console.log("db connected");
};
connection()

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use("/", bugRouter)
app.use('/graphql', graphqlHTTP({
  schema, 
  graphiql:true
}))

module.exports.handler = serverless(app);
