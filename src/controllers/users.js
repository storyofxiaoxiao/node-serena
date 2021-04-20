
import { v4 as uuidv4 } from "uuid";

// import { createValidator } from "express-joi-validation";
// import { Joi } from "joi"
let users = [];

// const querySchema = Joi.object({
//     query: Joi.string().required()
// })

export const getUsers = (req, res) => {
    users = users.filter((user) => !user.isDeleted);
    res.send(users);
}
export const createUser = (req, res) => {
    // {
    //     "id": "123",
    //     "username": "Serena Xu",
    //     "login": "success",
    //     "password": "123456",
    //     "age": 12,
    //     "isDeleted": false
    // }
    const user = req.body;
    users.push({
        ...user,
        id: uuidv4(),
    });
    res.send(`User with the username ${user.username} added to the database.`);
}

export const getUser = (req, res) => {
    const { id } = req.params;
    const foundUser = users.find((user) => user.id === id);
    res.send(foundUser);
}

export const updateUser = (req, res) => {
    const { id } = req.params;
    const { age } = req.body;
    const userToBeUpdated = users.filter((user) => user.id == id);
    // remove curly braces in single line
    if (age) userToBeUpdated.age = age;
    res.send(`User with the username ${age} added to the database.`);
}
export const deleteUser = (req, res) => {
    const { id } = req.params;
    const userToBeUpdated = users.filter((user) => user.id === id);
    if (isDeleted) userToBeUpdated.isDeleted = true;
    users = users.filter((user) => !user.isDeleted);
    res.send(`User with the userId ${id} added to the database.`);
}