import classes from "./AddUser.module.css";
import Card from "../UI/Card";
import Button from "../UI/Button";
import React, { useState, useRef } from "react";
import ErrorModal from "../UI/ErrorModal";

const AddUser = (props) => {
  const enteredName = useRef();
  const enteredAge = useRef();
  const [error, setError] = useState("");

  const onSubmitHandler = (event) => {
    event.preventDefault();
    if (enteredName.current.value.trim().length === 0) {
      setError({
        title: "Invalid input",
        message: "Please give a valid name and a valid age (non-empty values).",
      });
      return;
    }
    if (enteredAge.current.value < 1) {
      setError({
        title: "Invalid age",
        message: "Please give a valid age (>0).",
      });
      return;
    }
    const newUser = {
      id: Math.random().toString(),
      name: enteredName.current.value,
      age: +enteredAge.current.value,
    };
    console.log(newUser);
    props.onAddUser(newUser);
    enteredName.current.value = "";
    enteredAge.current.value = "";
  };

  const onClearErrorHandler = () => {
    setError(null);
  };

  return (
    <React.Fragment>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={onClearErrorHandler}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={onSubmitHandler}>
          <label>Name</label>
          <input ref={enteredName} type="text"></input>
          <label>Age (years)</label>
          <input ref={enteredAge} type="number" step="1"></input>
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </React.Fragment>
  );
};

export default AddUser;
