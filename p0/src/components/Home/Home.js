import classes from "./Home.module.css";
import Card from "../UI/Card";
import Button from "../UI/Button";
import React, { useContext } from "react";
import { AuthContext } from "../../context/auth-context";

const Home = (props) => {
  const authCtx = useContext(AuthContext);

  return (
    <Card className={classes.home}>
      <h1>🎉 Welcome back </h1>
      <Button onClick={authCtx.onLogout}>Logout</Button>
    </Card>
  );
};

export default Home;
