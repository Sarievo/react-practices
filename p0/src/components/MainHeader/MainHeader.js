import classes from "./MainHeader.module.css";
import Navigation from "./Navigation";
import { useContext } from "react";
import { AuthContext } from "../../context/auth-context";

const MainHeader = (props) => {
  const authCtx = useContext(AuthContext);

  return (
    <div className={classes[`main-header`]}>
      <h1>A Classic Page</h1>
      {authCtx.isLoggedIn && <Navigation />}
    </div>
  );
};

export default MainHeader;
