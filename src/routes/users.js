import express from "express";
import { v4 as uuidv4 } from "uuid";

const router = express.Router();

const users = [{
    id: "1",
    username: "Serena Xu",
    login: "success",
    password: "123456",
    age: 12,
    isDeleted: false
}]

// all routes in here are starting with /users
router.get('/', (req, res) => {
    console.log(users)
    res.send(users);
});

router.post('/', (req, res) => {
    const user = req.body;
    const userId = uuidv4();
    const userWithId = {
        ...user,
        id: userId,
    };
    users.push(userWithId);
    res.send(`User with the username ${userWithId.username} added to the database.`);

});
export default router;