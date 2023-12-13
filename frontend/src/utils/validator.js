// eslint-disable-next-line import/no-extraneous-dependencies
import validator from 'validator';

/**
 * check username if respect conditions
 * 
 * @param {String} username - username's going to check
 * 
 * @returns {String} - error if username doesn't respect condition
 */
function checkUserName(username) {
  let error = '';
  
  if(username.length === 0){
    error = 'Remplissez le champ pseudo !';
    return error;
  }

  if (!validator.isAlphanumeric(username)) {
    error = 'Votre pseudo ne peut contenir que des lettres et des chiffres';
    return error;
  }

  if(username.length > 15) {
    error = 'Votre pseudo est trop long';
    return error;
  }

  if(username.length < 4) {
    error = 'Votre pseudo est trop court';
    return error;
  }

  return null;
}

/**
 * check email if respect conditions
 * 
 * @param {String} email - email's going to check
 * 
 * @returns {String} - error if email doesn't respect condition
 */
function checkEmail(email) {
  let error = '';

  if(email.length === 0){
    error = 'Remplissez le champ email !'
    return error;
  }

  if (!validator.isEmail(email)) {
    error = 'Votre email est invalide';
    return error;
  }

  return null;
}

/**
 * check password if respect conditions
 * 
 * @param {String} password - password's going to check
 * 
 * @returns - error if password doesn't respect condition
 */
function checkPassword(password) {
  let error = '';

  if(password.length === 0){
    error = 'Remplissez le champ password !';
    return error;
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
    error = "Votre mot de passe n'est pas assez fort";
    return error;
  }

  return null;
}

/**
 * Validates information before the login process.
 * 
 * @param {object} data - An object containing user login information.
 * @param {string} data.username - The username to be validated.
 * @param {string} data.password - The password to be validated. 
 * 
 * @returns {string} Returns an error message if validation fails, otherwise an empty string.
 */
function checkInformationsBeforeLogin(data){
  let error = '';

  if(data.username.length <= 1 || data.password.length <= 1) {
    error = 'Remplissez les champs !'
    return error;
  }

  return error;
}

export { checkUserName, checkPassword, checkEmail, checkInformationsBeforeLogin };
