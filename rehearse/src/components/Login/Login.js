import React, {
  useRef,
  useEffect,
  useReducer,
  useState,
  useContext,
} from "react";

import classes from "./Login.module.css";
import Card from "../UI/Card";
import Input from "../UI/Input";
import Button from "../UI/Button";
import { AuthContext } from "../../context/auth-context";

const Login = (props) => {
  const [formIsValid, setFormIsValid] = useState(false);
  const [emailState, dispatchEmail] = useReducer(
    (state, action) => {
      if (action.type === "USER_INPUT")
        return { value: action.val, isValid: action.val.includes("@") };
      if (action.type === "VALIDATE")
        return { value: state.value, isValid: state.value.includes("@") };
      return { value: "", isValid: false };
    },
    {
      value: "",
      isValid: null,
    }
  );
  const [passwordState, dispatchPassword] = useReducer(
    (state, action) => {
      if (action.type === "USER_INPUT")
        return { value: action.val, isValid: action.val.length > 7 };
      if (action.type === "VALIDATE")
        return { value: state.value, isValid: state.value.length > 7 };
      return { value: "", isValid: false };
    },
    {
      value: "",
      isValid: null,
    }
  );

  const chgEmailHandler = (event) => {
    dispatchEmail({ val: event.target.value, type: "USER_INPUT" });
  };
  const chgPasswordHandler = (event) => {
    dispatchPassword({ val: event.target.value, type: "USER_INPUT" });
  };
  const checkEmailHandler = () => {
    dispatchEmail({ type: "VALIDATE" });
  };
  const checkPasswdHandler = () => {
    dispatchPassword({ type: "VALIDATE" });
  };

  const { isValid: emailIsValid } = emailState;
  const { isValid: passwordIsValid } = passwordState;

  useEffect(() => {
    const id = setTimeout(() => {
      setFormIsValid(emailIsValid && passwordIsValid);
    }, 500);
    return () => {
      clearTimeout(id);
    };
  }, [emailIsValid, passwordIsValid]);

  const ctx = useContext(AuthContext);

  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();
    if (formIsValid) {
      ctx.onLogin(emailState.value, passwordState.value);
    } else if (!emailIsValid) {
      emailInputRef.current.focus();
    } else {
      passwordInputRef.current.focus();
    }
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <Input
          ref={emailInputRef}
          id="email"
          label="E-Mail"
          type="email"
          value={emailState.value}
          onChange={chgEmailHandler}
          isValid={emailIsValid}
          onBlur={checkEmailHandler}
        />
        <Input
          ref={passwordInputRef}
          id="password"
          label="Password"
          type="password"
          value={passwordState.value}
          onChange={chgPasswordHandler}
          isValid={passwordIsValid}
          onBlur={checkPasswdHandler}
        />
        <div className={classes.actions}>
          <Button type="submit">Login</Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
