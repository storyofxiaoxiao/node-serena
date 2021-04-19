import express from "express";
import { v4 as uuidv4 } from "uuid";

const router = express.Router();

// const users = [{
//     id: uuidv4(),
//     username: "Serena Xu",
//     login: "success",
//     password: "123456",
//     age: 12,
//     isDeleted: false
// }, {
//     id: '123',
//     username: "Serena Xu",
//     login: "success",
//     password: "123456",
//     age: 12,
//     isDeleted: false
// }]

let users = [];

// all routes in here are starting with /users
router.get('/', (req, res) => {
    console.log(users)
    res.send(users);
});

router.post('/', (req, res) => {
    const user = req.body;
    // {
    //     "id": "123",
    //     "username": "Serena Xu",
    //     "login": "success",
    //     "password": "123456",
    //     "age": 12,
    //     "isDeleted": false
    // }
    const userWithId = {
        ...user,
        id: uuidv4(),
    };
    users.push(userWithId);
    res.send(`User with the username ${userWithId.username} added to the database.`);

});

// /users/2 => req.params {id:2}
router.get('/:id', (req, res) => {
    const { id } = req.params;
    console.log('id: ', id);
    const foundUser = users.find((user) => user.id === id);
    console.log(foundUser);
    res.send(foundUser);
});

router.delete('/:id', (req, res) => {
    const { id } = req.params;
    console.log('id: ', id);
    users = users.filter((user) => user.id !== id);
    res.send(`User with the userId ${id} added to the database.`);
});

// update a user
router.patch('/:id', (req, res) => {
    const { id } = req.params;
    const { username, password, age, isDeleted } = req.body;
    console.log('username: ', username);
    console.log('id: ', id);
    const userToBeUpdated = users.filter((user) => user.id === id);
    // remove curly braces in single line
    if (username) userToBeUpdated.username = username;
    if (password) userToBeUpdated.password = password;
    if (age) userToBeUpdated.age = age;
    if (isDeleted) userToBeUpdated.isDeleted = isDeleted;

    res.send(`User with the username ${username} added to the database.`);
});
export default router;