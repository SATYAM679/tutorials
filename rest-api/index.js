const express = require("express");
const bodyParser = require("body-parser");
const usersRoutes = require("./routes/users");

const app = express();
const PORT = 5000;

app.use(bodyParser.json());

// ALL ROUTES

app.get("/", (req, res) => res.send("HOME PAGE"));

app.get("/users", usersRoutes);

app.post("/users", usersRoutes);

app.listen(PORT, () =>
  console.log(`Server running on port http://127.0.0.1:${PORT}`)
);
