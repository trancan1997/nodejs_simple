const express = require("express");
const serverless = require("serverless-http");

const app = express();
const router = express.Router();

router.get("/", (req, res) => {
  res.json({
    hello: "hi!"
  });
});

router.get("/link/:id([0-9]+)", (req, res) => {
  console.clear();
  console.log(req.params.id);
  res.json({
    hello: "hi! 123"
  });
});



// app.use(`/.netlify/functions/api`, router);
app.use(`/`, router);

module.exports = app;
module.exports.handler = serverless(app);
