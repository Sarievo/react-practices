import React, { useContext } from "react";
import Login from "./components/Login/Login";
import MainHeader from "./components/MainHeader/MainHeader";
import Home from "./components/Home/Home";
import { AuthContext } from "./context/auth-context";

function App() {
  const authCtx = useContext(AuthContext);

  return (
    <React.Fragment>
      <MainHeader />
      <main>{authCtx.isLoggedIn ? <Home /> : <Login />}</main>
    </React.Fragment>
  );
}

export default App;
