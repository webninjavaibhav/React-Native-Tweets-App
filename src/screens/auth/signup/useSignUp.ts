import { useContext, useState } from "react";
import { AuthContext } from "../../../context/AuthProvider";
import { isValidEmail } from "../../../utils";

import { AuthError, AuthErrorCodes } from "firebase/auth";

function useSignup() {
  const { SignUp, isLoading } = useContext(AuthContext);

  const [formError, setFormError] = useState("");

  const [errors, setErrors] = useState({
    haveErrors: false,
    errors: {
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const [formFields, setFormFields] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const onFieldChange = (field: keyof typeof formFields, value: string) => {
    setFormFields((prev) => ({
      ...prev,
      [field]: value,
    }));
    setFormError("");
  };

  const onSignup = async () => {
    try {
      const _errors = {
        _haveErrors: false,
        errors: {
          email: "",
          password: "",
          confirmPassword: "",
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

      if (formFields.confirmPassword !== formFields.password) {
        _errors.errors.confirmPassword =
          "Confirm password must be same as password.";
      } else {
        _errors.errors.confirmPassword = "";
      }

      _errors._haveErrors =
        _errors.errors.email !== "" ||
        _errors.errors.password !== "" ||
        _errors.errors.confirmPassword !== ""
          ? true
          : false;

      if (!_errors._haveErrors) {
        const res = await SignUp(formFields);
        setErrors({
          haveErrors: false,
          errors: {
            confirmPassword: "",
            email: "",
            password: "",
          },
        });
        console.log("res - ", res);
        if (
          (res as AuthError).code === AuthErrorCodes.INVALID_LOGIN_CREDENTIALS
        ) {
          setFormError("Invalid email or password.");
        }
        if ((res as AuthError).code === AuthErrorCodes.EMAIL_EXISTS) {
          setFormError("Email already exists.");
        }
      } else {
        setErrors({
          ..._errors,
          haveErrors: _errors._haveErrors,
        });
      }
    } catch (error) {}
  };

  return { errors, formError, formFields, isLoading, onSignup, onFieldChange };
}

export default useSignup;
