import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const onSaveExpenseHandler = (expense) => {
    props.onAddExpense({
      id: Math.random().toString(),
      ...expense,
    });
  };

  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpense={onSaveExpenseHandler} />
    </div>
  );
};

export default NewExpense;
