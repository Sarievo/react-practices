import "./ExpenseForm.css";
import React, { useState } from "react";

const ExpenseForm = (props) => {
  const [enteredDate, setEnteredDate] = useState("");
  const [enteredPrice, setEnteredPrice] = useState("");
  const [enteredTitle, setEnteredTitle] = useState("");

  const alterDateHandler = (event) => {
    setEnteredDate(event.target.value);
  };
  const alterPriceHandler = (event) => {
    setEnteredPrice(event.target.value);
  };
  const alterTitleHandler = (event) => {
    setEnteredTitle(event.target.value);
  };
  const onSubmitHandler = (event) => {
    event.preventDefault();
    if (enteredDate && enteredPrice && enteredTitle) {
      const newExpense = {
        date: new Date(enteredDate),
        price: enteredPrice,
        title: enteredTitle,
      };
  
      console.log(newExpense);
      props.onSaveExpense(newExpense);
      setEnteredDate("");
      setEnteredPrice("");
      setEnteredTitle("");
    }
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            onChange={alterTitleHandler}
            value={enteredTitle}
          ></input>
        </div>
        <div className="new-expense__control">
          <label>Price</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={alterPriceHandler}
            value={enteredPrice}
          ></input>
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            onChange={alterDateHandler}
            value={enteredDate}
          ></input>
        </div>
      </div>
      <div className="new-expense__actions">
        <button>Cancel</button>
        <button type="submit">Add expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
