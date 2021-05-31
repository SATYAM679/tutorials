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

router.post("/users", (req, res) => {
  const user = req.body;
  users.push(user);
  console.log(user);
  res.send(`User ${user.firstName} is added`);
});

module.exports = router;
