import express from "express";
import { getUsers, createUser, getUser, updateUser, deleteUser } from "../controllers/users.js";

const router = express.Router();
let users = [];
// all routes in here are starting with /users
router.get('/', getUsers);

router.post('/', createUser);

// /users/2 => req.params {id:2}
router.get('/:id', getUser);

router.delete('/:id', deleteUser);

// update a user
router.patch('/:id', updateUser);
export default router;