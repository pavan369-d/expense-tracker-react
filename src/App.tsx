import React, { useEffect, useState } from "react";

function App() {
  type Expense = {
    title:string;
    amount:number;
  } 
  const [title, setTitle] = useState<string>("");
  const [amount, setAmount] = useState<number>(0);
  const [allExpenses, setAllExpenses] = useState<
    Expense[]
  >([]);
  let totalAmount = allExpenses.reduce((acc,exp)=>acc+exp.amount,0);

  const handleTitleChange = (e:React.ChangeEvent<HTMLInputElement>)=>{
    setTitle(e.target.value);
  }

  const handleAmountChange = (e:React.ChangeEvent<HTMLInputElement>)=>{
    setAmount(Number(e.target.value));
  }

  const addExpense = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Expense Added:", { title, amount });
    const newExpense:Expense = { title, amount };
    const updatedExpenses = [...allExpenses, newExpense];
    localStorage.setItem("expensesr", JSON.stringify(updatedExpenses));

    setAllExpenses([...updatedExpenses]);
    setTitle("");
    setAmount(0);
   
    console.log("All Expenses: ", allExpenses);
  };

  useEffect(() => {
    const storedExpenses = localStorage.getItem("expensesr");
    if (storedExpenses) {
      const expenses:Expense[] = JSON.parse(storedExpenses);
      setAllExpenses(expenses);
    }
  }, []);
  return (
    <div className="expense-container">
      <h1>Expense Tracker</h1>
      <div className="expense-form">
        <form onSubmit={addExpense}>
          <div className="form-group">
            <label htmlFor="title">Description</label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={handleTitleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="amount">Amount</label>
            <input
              type="number"
              id="amount"
              value={amount}
              onChange={handleAmountChange}
            />
          </div>
          <button type="submit">Add Expense</button>
        </form>
      </div>
      <div className="expense-list">
        <h2>All Expenses</h2>
        {allExpenses.map((expense, index) => (
          <p key={index}>
            {expense.title} - {expense.amount}
          </p>
        ))}
      </div>
      <div className="total-amount">
        <h2>Total amount: &#8377; {totalAmount}</h2>
      </div>
    </div>
  );
}

export default App;
