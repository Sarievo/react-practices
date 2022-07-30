import "./ExpensesList.js";
import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";

const ExpensesList = (props) => {
  if (props.items.length > 0)
    return (
      <div className="expenses-list">
        {props.items.map((it) => (
          <ExpenseItem key={it.id} item={it} />
        ))}
      </div>
    );

  return <h2 className="expenses-list__fallback">No expenses found.</h2>;
};

export default ExpensesList;
