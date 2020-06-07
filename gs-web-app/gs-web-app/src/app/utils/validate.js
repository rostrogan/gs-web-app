const emailValidationRegExp = new RegExp('^.+@[^\\.].*\\.[a-z]{2,}$');

export const minLengthEmail = (value) => {
  const trimmed = value ? value.trim() : '';
  return trimmed.length < 6 ? 'Email не менше 6 символів' : undefined;
};

export const email = (errorMessage) => (value) => {
  const trimmed = value ? value.trim() : '';
  return trimmed && !emailValidationRegExp.test(trimmed) ? errorMessage() : undefined;
};

export const requiredFile = value => {
  if (value) return undefined;
  return "Це поле обов'язкове"
};

export const emailError = [
  minLengthEmail,
  email(() => 'Ваш email не валідний'),
];

/**password***/
const passwordValidationRegExp = RegExp('^([a-zA-Z0-9@*#]{6,15})$');

export const validPasswordCharacters = (errorMessage => (value) =>
  value && passwordValidationRegExp.test(value)
    ? undefined
    : errorMessage());

export const passwordLoginError = [
    validPasswordCharacters(() => 'Пароль не валідний'),
];
