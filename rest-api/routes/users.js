import express from "express";
import { v4 as uuidv4 } from "uuid";
import {
  createUser,
  getUser,
  deleteUser,
  updateUser,
} from "../controllers/users";

const router = express.Router();

let users = [];

router.get("/", (req, res) => {
  res.send(users);
});

router.post("/", createUser);

router.get("/:id", getUser);

router.delete("/:id", deleteUser);

router.patch("/:id", updateUser);

export default router;
