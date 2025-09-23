module.exports = {
  jwtSecret: process.env.JWT_SECRET || "super_secret_key",
  reportsDir: __dirname + "/../../reports",
  usersFile: __dirname + "/../../users.json"
};
