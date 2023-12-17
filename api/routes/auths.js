const express = require('express');
const { register, login } = require('../models/users');
const { checkUserName, checkEmail, checkPassword } = require('../utils/validator');

const router = express.Router();

/* Register a user */
router.post('/register', async (req, res) => {
  const username = req?.body?.username?.length !== 0 ? req.body.username : undefined;
  const email = req?.body?.email?.length !== 0 ? req.body.email : undefined;
  const password = req?.body?.password?.length !== 0 ? req.body.password : undefined;

  if (!username || !email || !password) return res.sendStatus(400); // 400 Bad Request

  const validateEmail = checkEmail(email);
  const validateUserName = checkUserName(username);
  const validatePassword = checkPassword(password);

  if (!validateUserName.isValid) return res.status(400).send(validateUserName.error);
  if (!validateEmail.isValid) return res.status(400).send(validateEmail.error);
  if (!validatePassword.isValid) return res.status(400).send(validatePassword.error);

  const authenticatedUser = await register(username, email, password);

  if (!authenticatedUser) return res.sendStatus(409); // 409 Conflict

  return res.json(authenticatedUser);
});

/* Login a user */
router.post('/login', async (req, res) => {
  const user = req?.body?.username?.length !== 0 ? req.body.username : undefined;
  const password = req?.body?.password?.length !== 0 ? req.body.password : undefined;

  if (!user || !password) {
    res.status(400).send('Pseudo, email ou mot de passe invalide'); // 400 Bad Request
  }

  const authenticatedUser = await login(user, password);

  if (!authenticatedUser) return res.sendStatus(401); // 401 Unauthorized

  return res.json(authenticatedUser);
});

module.exports = router;
