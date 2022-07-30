import classes from "./MainHeader.module.css";
import { useContext } from "react";
import { AuthContext } from "../../context/auth-context";
import Navigation from "./Navigation";

const MainHeader = (props) => {
  const ctx = useContext(AuthContext);
  return <div className={classes[`main-header`]}>
    <h1>My Page</h1>
    {ctx.isLoggedIn && <Navigation />}
  </div>;
};

export default MainHeader;
