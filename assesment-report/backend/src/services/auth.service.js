const fs = require("fs");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { usersFile, jwtSecret } = require("../config");

function readUsers() {
  try {
    return JSON.parse(fs.readFileSync(usersFile));
  } catch {
    return [];
  }
}

function writeUsers(users) {
  fs.writeFileSync(usersFile, JSON.stringify(users, null, 2));
}

async function signup(email, password) {
  const users = readUsers();
  if (users.find((u) => u.email === email)) throw new Error("User exists");
  const hashed = await bcrypt.hash(password, 8);
  users.push({ email, password: hashed });
  writeUsers(users);
  return true;
}

async function login(email, password) {
  const users = readUsers();
  const user = users.find((u) => u.email === email);
  if (!user) throw new Error("Invalid credentials");
  const ok = await bcrypt.compare(password, user.password);
  if (!ok) throw new Error("Invalid credentials");
  const token = jwt.sign({ email }, jwtSecret, { expiresIn: "8h" });
  return token;
}

module.exports = { signup, login };
