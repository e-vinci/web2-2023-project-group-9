// eslint-disable-next-line import/no-extraneous-dependencies
const validator = require('validator');

/**
 * Check the validity of a username.
 * @param {string} username - The username to be checked.
 * @returns {Object} An object containing an error message and a validity flag.
 * - `error` (string): The error message if any.
 * - `isValid` (boolean): The validity flag.
 */
function checkUserName(username) {
  let error = '';
  let isValid = true;

  if (username.length === 0) {
    error = 'Le pseudo est vide';
    isValid = false;
    return { error, isValid };
  }

  if (!validator.isAlphanumeric(username)) {
    error = 'Le pseudo ne peut contenir que des lettres et des chiffres';
    isValid = false;
    return { error, isValid };
  }

  if (username.length > 15) {
    error = 'Le pseudo est trop grand';
    isValid = false;
    return { error, isValid };
  }

  if (username.length < 4) {
    error = 'Le pseudo est trop court';
    isValid = false;
    return { error, isValid };
  }

  return { error, isValid };
}

/**
 * Check the validity of an email address.
 * @param {string} email - The email address to be checked.
 * @returns {Object} An object containing an error message and a validity flag.
 * - `error` (string): The error message if any.
 * - `isValid` (boolean): The validity flag.
 */
function checkEmail(email) {
  let error = '';
  let isValid = true;

  if (email.length === 0) {
    error = "L'email est vide";
    isValid = false;
    return { error, isValid };
  }

  if (!validator.isEmail(email)) {
    error = "L'email n'est pas une email valide";
    isValid = false;
    return { error, isValid };
  }

  return { error, isValid };
}

/**
 * Check the validity of a password.
 * @param {string} password - The password to be checked.
 * @returns {Object} An object containing an error message and a validity flag.
 * - `error` (string): The error message if any.
 * - `isValid` (boolean): The validity flag.
 */
function checkPassword(password) {
  let error = '';
  let isValid = true;

  if (password.length === 0) {
    error = 'Le mot de passe est vide';
    isValid = false;
    return { error, isValid };
  }

  if (
    !validator.isStrongPassword(password, {
      minLength: 8,
      minUppercase: 1,
      minLowercase: 2,
      minNumbers: 2,
      minSymbols: 1,
    })
  ) {
    error = "Le mot de passe n'est pas assez fort";
    isValid = false;
    return { error, isValid };
  }

  return { error, isValid };
}

module.exports = { checkUserName, checkPassword, checkEmail };
