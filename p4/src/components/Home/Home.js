import classes from "./Home.module.css";
import Card from "../UI/Card";
import React, { useContext } from "react";
import Button from "../UI/Button";
import { AuthContext } from "../../context/auth-context";

const Home = (props) => {
  const ctx = useContext(AuthContext);
  return (
    <Card className={classes.home}>
      <h2>🎉 Welcome back!</h2>
      <Button onClick={ctx.onLogout}>Logout</Button>
    </Card>
  );
};

export default Home;
