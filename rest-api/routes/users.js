const express = require("express");

const router = express.Router();

const users = [
  {
    firstName: "Rick",
    lastName: "Grimes",
    role: "Leader",
    zombieKillCount: 1010,
    humanKillCount: 25,
  },
  {
    firstName: "Negan",
    lastName: "Smith",
    role: "Leader",
    zombieKillCount: 1610,
    humanKillCount: 15,
  },
];

// /users get route
router.get("/users", (req, res) => {
  res.send(users);
});

module.exports = router;
