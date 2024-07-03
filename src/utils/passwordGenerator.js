import { sha256 } from "js-sha256";

import store from "../store/index";
import { CONSTANTS } from "./constants";
import { passwordFormActions } from "../store/password-form-slice";

const isDigit = (c) => {
  return /^[0-9]$/.test(c);
};

const mapDigit = (c, i) => {
  const baseCharCode = "a".charCodeAt(0);
  return String.fromCharCode(baseCharCode + parseInt(c) + i);
};

const convertToOnlyAlphabets = (hashedPassword) => {
  let onlyAlphabetsPassword = "";
  for (let i = 0; i < hashedPassword.length; i++) {
    if (isDigit(hashedPassword[i])) {
      onlyAlphabetsPassword += mapDigit(hashedPassword[i], i);
    } else {
      onlyAlphabetsPassword += hashedPassword[i];
    }
  }
  return onlyAlphabetsPassword;
};

export const generatePassword = (values) => {
  const fullPassword =
    values?.domainName + values?.password + values?.iteration.toString();
  let hashedPassword = sha256(fullPassword).substring(0, 12);

  if (
    values?.passwordFormat.includes(
      CONSTANTS.PASSWORD_FORM.PASSWORD_FORMATS.ONLY_LETTERS
    )
  ) {
    hashedPassword = convertToOnlyAlphabets(hashedPassword);
  }
  console.log(hashedPassword);
  store.dispatch(passwordFormActions.updateGeneratedPassword(hashedPassword));
};
