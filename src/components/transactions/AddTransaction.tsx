import "./AddTransaction.css";
import type { Transaction } from "../../types/transaction";
import { useState } from "react";

interface AddTransactionProps {
  handleClick: () => void;
  onAdd: (transaction: Transaction) => void;
}

const expenseCategories: ExpenseCategory[] = [
  "Groceries",
  "Housing",
  "Travel",
  "Subscriptions",
  "Utilities",
];

const incomeCategories: IncomeCategory[] = [
  "Salary",
  "Freelance",
  "Bonus",
  "Investment",
];


export function AddTransaction({ handleClick, onAdd }: AddTransactionProps) {
  const [type, setType] = useState<"expense" | "income">("expense");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const categories = type === "expense" ? expenseCategories : incomeCategories;

  const [errors, setErrors] = useState<{
    amount?: string;
    title?: string;
    category?: string;
    date?: string;
  }>({});

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newErrors: typeof errors = {};

    if (!amount || Number(amount) <= 0) {
      newErrors.amount = "Please enter a valid amount";
    }

    if (!title) {
      newErrors.title = "Please enter a title";
    }

    if (!category) {
      newErrors.category = "Please select a category";
    }

    if (!date) {
      newErrors.date = "Please select a date";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) return;

    const newTransaction: Transaction = {
      id: Date.now(),
      type,
      title: title,
      amount: Number(amount),
      category: category as Transaction["category"],
      date,
    };
    onAdd(newTransaction);

    setAmount("");
    setTitle("");
    setCategory("");
    setDate("");
    setErrors({});
  };

  return (
    <section className="add-transaction-form">
      <div className="form-title">
        <div className="form-title-text">Add New Transaction</div>
        <div className="form-cancel">
          <button onClick={handleClick}>Cancel</button>
        </div>
      </div>
      <div className="form-category">
        <div
          className={`form-expense ${type === "expense" ? "form-category-expense-click " : ""}`}
          onClick={() => {
            setType("expense");
            setCategory("");
          }}
        >
          Expense
        </div>
        <div
          className={`form-income ${type === "income" ? "form-category-income-click " : " "}`}
          onClick={() => {
            setType("income");
            setCategory("");
          }}
        >
          Income
        </div>
      </div>
      <form className="add-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <div className="form-title">
            <label htmlFor="amount">Amount</label>
          </div>
          <div className="form-input">
            <input
              type="text"
              id="amount"
              placeholder="0.00"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
            {errors.amount && <p className="error-text">{errors.amount}</p>}
          </div>
        </div>
        <div className="form-group">
          <div className="form-title">
            <label htmlFor="amount">Category</label>
          </div>
          <div className="form-input">
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="">Select a category</option>
            {categories.map(cts=>(
                <option key={cts} value={cts}>{cts}</option>
            ))}
            </select>
            {errors.category && <p className="error-text">{errors.category}</p>}
          </div>
        </div>
        <div className="form-group">
          <div className="form-title">
            <label htmlFor="amount">Title</label>
          </div>
          <div className="form-input">
            <input
              type="text"
              id="Title"
              placeholder="Enter Title"
              onChange={(e) => setTitle(e.target.value)}
            />
            {errors.title && <p className="error-text">{errors.title}</p>}
          </div>
        </div>
        <div className="form-group">
          <div className="form-title">
            <label htmlFor="amount">Date</label>
          </div>
          <div className="form-input">
            <input
              type="date"
              id="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
            {errors.date && <p className="error-text">{errors.date}</p>}
          </div>
        </div>
        <button className="add-transaction-btn">Add Transaction</button>
      </form>
    </section>
  );
}
