import express from "express";
import bodyParser from "body-parser";
import usersRoutes from "./routes/users";

const app = express();
const PORT = 5000;

app.use(bodyParser.json());

// ALL ROUTES
app.use("/users", usersRoutes);

app.get("/", (req, res) => res.send("HOME PAGE"));

app.get("*", (req, res) => res.send("ERROR: 404, PAGE NOT FOUND!"));

app.listen(PORT, () =>
  console.log(`Server running on port http://127.0.0.1:${PORT}`)
);
