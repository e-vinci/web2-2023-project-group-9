// eslint-disable-next-line import/no-extraneous-dependencies
import validator from 'validator';

function checkUserName(username) {
  let error = '';
  if (!validator.isAlphanumeric(username)) {
    error = 'Votre pseudo ne peut contenir que des lettres et des chiffres';
    return error;
  }
  
  if(username.length > 12) {
    error = 'Votre pseudo est trop long';
    return error;
  }

  if(username.length < 4) {
    error = 'Votre pseudo est trop court';
    return error;
  }

  return null;
}

function checkEmail(email) {
  let error = '';
  if (!validator.isEmail(email)) {
    error = 'Votre email est invalide';
    return error;
  }

  return null;
}

function checkPassword(password) {
  let error = '';
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

export { checkUserName, checkPassword, checkEmail };
