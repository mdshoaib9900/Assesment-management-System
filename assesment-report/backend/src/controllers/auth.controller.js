const { signup, login } = require("../services/auth.service");

exports.signup = async (req, res) => {
  try {
    const { email, password } = req.body;
    await signup(email, password);
    res.json({ success: true });
  } catch (e) {
    res.status(400).json({ error: e.message });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const token = await login(email, password);
    res.json({ token });
  } catch (e) {
    res.status(401).json({ error: e.message });
  }
};
