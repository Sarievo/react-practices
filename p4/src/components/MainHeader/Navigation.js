import Button from "../UI/Button";
import classes from "./Navigation.module.css";
import React, { useContext } from "react";
import { AuthContext } from "../../context/auth-context";

const Navigation = (props) => {
  const ctx = useContext(AuthContext);

  return (
    <nav className={classes.nav}>
      <ul>
        <li>
          <a href="/">Settings</a>
        </li>
        <li>
          <a href="/">Console</a>
        </li>
        <li>
          <Button onClick={ctx.onLogout}>Logout</Button>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
