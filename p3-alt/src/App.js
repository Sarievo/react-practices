import React, { useState } from "react";
import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";

const INIT_USERS = [
  { id: 1, name: "Sarievo", age: 22 },
  { id: 2, name: "LiliDroid", age: 2 },
];

function App() {
  const [users, setUsers] = useState(INIT_USERS);
  const onAddUserHandler = (user) => {
    setUsers(prevUsers => [user, ...prevUsers]);
  }

  return (
    <React.Fragment>
      <AddUser onAddUser={onAddUserHandler} />
      <UsersList users={users} />
    </React.Fragment>
  );
}

export default App;
