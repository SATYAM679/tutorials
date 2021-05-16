const express = require("express");

const router = express.Router();

// /users get route
router.get("/users", (req, res) => {
  res.send("all users");
});

module.exports = router;
