import React, {
  useRef,
  useState,
  useContext,
  useEffect,
  useReducer,
} from "react";

import classes from "./Login.module.css";
import Card from "../UI/Card";
import Button from "../UI/Button";
import Input from "../UI/Input";
import { AuthContext } from "../../context/auth-context";

const Login = (props) => {
  const [formIsValid, setFormIsValid] = useState(false);
  const [emailState, dispatchEmail] = useReducer(
    (state, action) => {
      if (action.type === "USER_INPUT") {
        return { value: action.val, isValid: action.val.includes("@") };
      } else if (action.type === "BLUR") {
        return { value: state.value, isValid: state.value.includes("@") };
      }
      return { value: "", isValid: false };
    },
    {
      value: "",
      isValid: null,
    }
  );
  const [passwordState, dispatchPassword] = useReducer(
    (state, action) => {
      if (action.type === "USER_INPUT") {
        return { value: action.val, isValid: action.val.length > 7 };
      } else if (action.type === "BLUR") {
        return { value: state.value, isValid: state.value.length > 7 };
      }
    },
    {
      value: "",
      isValid: null,
    }
  );

  // object decomposition (?)
  const { isValid: emailIsValid } = emailState;
  const { isValid: passwordIsValid } = passwordState;

  useEffect(() => {
    const identifier = setTimeout(() => {
      console.log("Validating...");
      setFormIsValid(emailIsValid && passwordIsValid);
    }, 500);
    return () => {
      clearTimeout(identifier);
    };
  }, [emailIsValid, passwordIsValid]);

  const changeEmailHandler = (event) => {
    dispatchEmail({ val: event.target.value, type: "USER_INPUT" });
  };
  const validateEmailHandler = () => {
    dispatchEmail({ type: "BLUR" });
  };
  const changePasswordHandler = (event) => {
    dispatchPassword({ val: event.target.value, type: "USER_INPUT" });
  };
  const validatePasswordHandler = () => {
    dispatchPassword({ type: "BLUR" });
  };

  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  const authCtx = useContext(AuthContext);
  const submitHandler = (event) => {
    event.preventDefault();
    if (formIsValid) {
      authCtx.onLogin(emailState.value, passwordState.value);
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
          type="email"
          label="E-Mail"
          isValid={emailIsValid}
          value={emailState.value}
          onChange={changeEmailHandler}
          onBlur={validateEmailHandler}
        />
        <Input
          ref={passwordInputRef}
          id="password"
          type="password"
          label="Password"
          isValid={passwordIsValid}
          value={passwordState.value}
          onChange={changePasswordHandler}
          onBlur={validatePasswordHandler}
        />
        <div className={classes.actions}>
          <Button type="submit">Login</Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
