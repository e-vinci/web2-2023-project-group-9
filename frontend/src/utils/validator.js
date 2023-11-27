// eslint-disable-next-line import/no-extraneous-dependencies
import validator from 'validator';

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

function checkInformationsBeforeLogin(data){
  let error = '';

  if(!validator.isAlphanumeric(data.username) || data.username.length <= 1 || data.password.length <= 1) {
    error = 'Remplissez les champs !'
    return error;
  }

  return error;
}

export { checkUserName, checkPassword, checkEmail, checkInformationsBeforeLogin };
