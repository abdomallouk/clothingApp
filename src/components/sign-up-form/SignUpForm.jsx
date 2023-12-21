import { useState } from "react";
import FormInput from "../form-input/FormInput";
import Button, { BUTTON_TYPE_CLASSES } from "../Button/Button";
import "./SignUpForm.scss";
import { useDispatch } from "react-redux";
import { signUpStart } from "../../store/user/user.action";

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUpForm = () => {
  const [formFields, setformFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;
  const dispatch = useDispatch();

  const resetFormFields = () => {
    setformFields(defaultFormFields);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("Your password do not match");
      return;
    }

    try {
      dispatch(signUpStart(email, password, displayName));
      resetFormFields();
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        alert("cannot create this user, email is already used ");
      } else {
        console.log(error);
      }
    }

    setformFields(defaultFormFields);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setformFields({ ...formFields, [name]: value });
  };

  return (
    <div className="sign-up-container">
      <h2>Dont't Have an account</h2>
      <span>Sign Up with your email and Password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Display Name"
          inputOptions={{
            type: "text",
            required: true,
            onChange: handleChange,
            name: "displayName",
            value: displayName,
          }}
        />

        <FormInput
          label="Email"
          inputOptions={{
            type: "email",
            required: true,
            onChange: handleChange,
            name: "email",
            value: email,
          }}
        />

        <FormInput
          label="Password"
          inputOptions={{
            type: "password",
            required: true,
            onChange: handleChange,
            name: "password",
            value: password,
          }}
        />

        <FormInput
          label="Confirm Password"
          inputOptions={{
            type: "password",
            required: true,
            onChange: handleChange,
            name: "confirmPassword",
            value: confirmPassword,
          }}
        />

        <Button type="submit" buttonType={BUTTON_TYPE_CLASSES.google}>
          Sign Up{" "}
        </Button>
      </form>
    </div>
  );
};

export default SignUpForm;
