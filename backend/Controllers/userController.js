const fs = require("fs");
const usersFilePath = "../frontend/src/Utils/users.json";

const readUsersData = () => {
  const data = fs.readFileSync(usersFilePath);
  return JSON.parse(data);
};

const createUser = (req, res) => {
  const { name, username, email, password, usertype } = req.body;
  const users = readUsersData();
  const newUserId = users.length > 0 ? users[users.length - 1].id + 1 : 1;

  const newUser = { id: newUserId, name, username, email, password, usertype };
  users.push(newUser);
  fs.writeFileSync(usersFilePath, JSON.stringify(users, null, 2));

  res.status(201).json(newUser);
};

const getUsers = (req, res) => {
  const users = readUsersData();
  res.json(users);
};

const getUserById = (req, res) => {
  const userId = parseInt(req.params.id);
  const users = readUsersData();
  const user = users.find((u) => u.id === userId);

  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  res.json(user);
};

const updateUser = (req, res) => {
  const userId = parseInt(req.params.id);
  const { name, username, email, password, usertype } = req.body;
  const users = readUsersData();

  const userIndex = users.findIndex((u) => u.id === userId);
  if (userIndex === -1) {
    return res.status(404).json({ message: "User not found" });
  }

  users[userIndex] = { id: userId, name, username, email, password, usertype };
  fs.writeFileSync(usersFilePath, JSON.stringify(users, null, 2));

  res.json(users[userIndex]);
};

const deleteUser = (req, res) => {
  const userId = parseInt(req.params.id);
  const users = readUsersData();

  const userIndex = users.findIndex((u) => u.id === userId);
  if (userIndex === -1) {
    return res.status(404).json({ message: "User not found" });
  }

  users.splice(userIndex, 1);
  fs.writeFileSync(usersFilePath, JSON.stringify(users, null, 2));

  res.status(204).send();
};

module.exports = {
  createUser,
  getUsers,
  getUserById,
  updateUser,
  deleteUser
};
