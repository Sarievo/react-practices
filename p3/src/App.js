import AddUser from "./Components/Users/AddUser";
import UsersList from "./Components/Users/UsersList";
import React, { useState } from "react";

const USERS_INIT = [
  { id: 1, name: "Sera", age: 22 },
  { id: 2, name: "Sekei", age: 28 },
];

function App() {
  const [users, setUsers] = useState(USERS_INIT);
  const addUserHandler = (user) => {
    setUsers((prevUsers) => [user, ...prevUsers]);
  };

  return (
    <div>
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={users} />
    </div>
  );
}

export default App;
