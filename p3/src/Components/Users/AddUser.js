import Button from "../UI/Button";
import Card from "../UI/Card";
import classes from "./AddUser.module.css";

import React, { useState } from "react";
import ErrorModal from "../UI/ErrorModal";

const AddUser = (props) => {
  const [enteredName, setName] = useState("");
  const [enteredAge, setAge] = useState("");
  const [error, setError] = useState("");

  const onAddUserHandler = (event) => {
    event.preventDefault();
    if (enteredName.trim().length === 0) {
      setError({
        title: "Invalid Input",
        message: "Please enter a non-empty name and a valid age (>0).",
      });
    } else if (enteredAge < 1) {
      setError({
        title: "Invalid Age",
        message: "Please enter a valid age (>0).",
      });
    } else {
      const newUser = {
        id: Math.random().toString(),
        name: enteredName,
        age: enteredAge,
      };
      console.log(newUser);
      props.onAddUser(newUser);
      setName("");
      setAge("");
    }
  };

  const clearErrorHandler = () => {
    setError(null);
  };

  const altNameHandler = (event) => {
    setName(event.target.value);
  };
  const altAgeHandler = (event) => {
    setAge(event.target.value);
  };

  return (
    <div>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={clearErrorHandler}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={onAddUserHandler}>
          <label>Name</label>
          <input
            type="text"
            value={enteredName}
            onChange={altNameHandler}
          ></input>
          <label>Age</label>
          <input
            type="number"
            value={enteredAge}
            step="1"
            onChange={altAgeHandler}
          ></input>
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
};

export default AddUser;
