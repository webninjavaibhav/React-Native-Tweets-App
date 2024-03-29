import { useContext, useState } from "react";
import { AuthContext } from "../../../context/AuthProvider";
import { isValidEmail } from "../../../utils";

import { AuthError, AuthErrorCodes } from "firebase/auth";

function useLogin() {
  const { login, isLoading } = useContext(AuthContext);

  const [formError, setFormError] = useState("");
  const [errors, setErrors] = useState({
    haveErrors: false,
    errors: {
      email: "",
      password: "",
    },
  });

  const [formFields, setFormFields] = useState({
    email: "",
    password: "",
  });

  const onFieldChange = (field: string, value: string) => {
    setFormFields((prev) => ({
      ...prev,
      [field]: value,
    }));
    setFormError("");
  };

  const onLogin = async () => {
    try {
      const _errors = {
        _haveErrors: false,
        errors: {
          email: "",
          password: "",
        },
      };
      if (!isValidEmail(formFields.email)) {
        _errors.errors.email = "Please enter valid email.";
      } else {
        _errors.errors.email = "";
      }

      if (formFields.password.trim().length < 6) {
        _errors.errors.password =
          "Password must be at least 6 characters long.";
      } else {
        _errors.errors.password = "";
      }
      _errors._haveErrors =
        _errors.errors.email !== "" || _errors.errors.password !== ""
          ? true
          : false;
      if (!_errors._haveErrors) {
        const res = await login(formFields);
        setErrors({
          haveErrors: false,
          errors: {
            email: "",
            password: "",
          },
        });
        console.log(
          "(res as AuthError).code === AuthErrorCodes.EMAIL_EXISTS - ",
          (res as AuthError).code === AuthErrorCodes.EMAIL_EXISTS
        );
        if (
          (res as AuthError).code === AuthErrorCodes.INVALID_LOGIN_CREDENTIALS
        ) {
          setFormError("Invalid email or password.");
        }
      } else {
        setErrors({
          haveErrors:
            _errors.errors.email !== "" || _errors.errors.password !== ""
              ? true
              : false,
          errors: _errors.errors,
        });
      }
    } catch (error) {}
  };

  return { errors, formError, isLoading, onLogin, onFieldChange };
}

export default useLogin;
