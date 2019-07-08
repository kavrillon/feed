"use strict";
const express = require("express");
const serverless = require("serverless-http");
const bodyParser = require("body-parser");
const axios = require("axios");
const morgan = require("morgan");

const app = express();
const router = express.Router();

app.use(morgan("tiny"));

router.get("/", (req, res) => {
  const { url } = req.query; // get url parameter
  res.type("text/html");
  if (!url) {
    return res.end("You need to specify <code>url</code> query parameter");
  }

  axios
    .get(url, { responseType: "arraybuffer" })
    .then(({ data }) => {
      res.send(data);
    })
    .catch(error => {
      console.log(error);
    });
});

app.use(bodyParser.json());

app.use("/.netlify/functions/render", router); // path must route to lambda

module.exports = app;
module.exports.handler = serverless(app);
