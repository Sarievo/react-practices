import React from "react";
import MainHeader from "./components/MainHeader/MainHeader";
import Login from "./components/Login/Login";

function App() {
  return (
    <React.Fragment>
      <MainHeader></MainHeader>
      <main>
        <Login />
      </main>
    </React.Fragment>
  );
}

export default App;
