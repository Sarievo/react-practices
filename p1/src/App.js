import "./App.css";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpenses/NewExpense";

import React, { useState } from "react";

const INIT_EXPENSES = [
  {
    id: 1,
    title: "JetBrains Subscription",
    price: 259,
    date: new Date(2021, 5, 24),
  },
  {
    id: 2,
    title: "Creative Cloud Subscription",
    price: 369,
    date: new Date(2021, 9, 23),
  },
  {
    id: 3,
    title: "Udemy Courses",
    price: 420,
    date: new Date(2022, 4, 14),
  },
];

function App() {
  const [expenses, setExpenses] = useState(INIT_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => [expense, ...prevExpenses]);
  };

  return (
    <div className="App">
      <h2>Hello React</h2>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
