const express = require("express");
const router = express.Router();

router.get("/", async (req, res, next) => {
  return res.status(200).json({
    title: "Express Testing",
    message: "The app is working properly!",
  });
});

router.get("/home", async (req, res, next) => {
  return res.status(200).json({
    title: "Home",
    message: "The Message master",
  });
});

module.exports = router;
