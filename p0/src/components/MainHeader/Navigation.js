import Button from "../UI/Button";
import classes from "./Navigation.module.css";
import { useContext } from "react";
import { AuthContext } from "../../context/auth-context";

const Navigation = (props) => {
  const authCtx = useContext(AuthContext);

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
          <Button onClick={authCtx.onLogout}>Logout</Button>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
