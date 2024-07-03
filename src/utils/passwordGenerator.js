import { sha256 } from "js-sha256";

import store from "../store/index";
import { passwordFormActions } from "../store/password-form-slice";

export const generatePassword = (values) => {
  const fullPassword =
    values?.domainName + values?.password + values?.iteration.toString();
  const hashedPassword = sha256(fullPassword).substring(0, 12);
  console.log(hashedPassword);
  store.dispatch(passwordFormActions.updateGeneratedPassword(hashedPassword));
};
