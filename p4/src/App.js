import React, { useContext } from "react";

import MainHeader from "./components/MainHeader/MainHeader";
import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import { AuthContext } from "./context/auth-context";

function App() {
  const ctx = useContext(AuthContext);

  return (
    <React.Fragment>
      <MainHeader></MainHeader>
      <main>
        {ctx.isLoggedIn && <Home />}
        {!ctx.isLoggedIn && <Login />}
      </main>
    </React.Fragment>
  );
}

export default App;
