import {  useEffect, useMemo, useState } from "react";
import SummaryCards from "./components/summary/SummaryCards";
import { AddTransaction } from "./components/transactions/AddTransaction";
import AddBtnIcon from "/public/add-btn.png"
import { ExpenseChart } from "./components/analytics/ExpenseChart";
import { TransactionList } from "./components/transactions/TransactionList";
import type { Transaction } from "./types/transaction";

function App(){
  const [showForm,setShowForm] = useState(false);

  const initialTransactions:Transaction[] = [
    { id: 1,type:"expense", title: "Food", amount: 500, category: "Groceries",date:"2026-02-19" },
  { id: 2,type:"expense", title: "Rent", amount: 8000, category: "Housing",date: "2026-02-19" },
  { id: 3, type:"expense",title: "Travel to Meghalaya", amount: 1200, category: "Travel",date: "2026-02-19" },
  { id: 4, type:"expense",title: "Netflix", amount: 149, category: "Subscriptions",date: "2026-02-19" },
  {id:5,type:"expense",title:"Gas bill",amount:1000,category:"Utilities",date: "2026-02-19"},
  {id:6,type:"expense",title:"Vegetables",amount:200,category:"Groceries",date: "2026-02-19"},
  {id:7,type:"expense",title:"Hotel",amount:10000,category:"Housing",date: "2026-02-19"},
  {id:8,type:"expense",title:"Travel to Himalaya",amount:8000,category:"Travel",date: "2026-02-19"},
  {id:9,type:"expense",title:"Amazon",amount:350,category:"Subscriptions",date: "2026-02-19"}
  ]

  const [transactions,setTransactions] = useState<Transaction[]>(initialTransactions);
 const [totalExpense,setTotalExpense] = useState();
 const [currentBalance,setCurrentBalance] = useState();
 const [incomeBalance,setIncomeBalance] = useState();
const categoryTotals = useMemo(() => {
  return transactions.reduce((acc, expense) => {
    const existing = acc.find(
      item => item.category === expense.category
    );

    if (existing) {
      existing.amount += expense.amount;
    } else {
      acc.push({
        category: expense.category,
        amount: expense.amount,
      });
    }

    return acc;
  }, [] as { category: string; amount: number }[]);
}, [transactions]);

useEffect(()=>{
  let total = 0;
  for(var key in categoryTotals){
    console.log(categoryTotals[key].amount);
    total += categoryTotals[key].amount;

  }

  setTotalExpense(total);
},[])

 



  const handleAddTransactionClick = () =>{
    setShowForm((prev)=>!prev);
    
  }

  const handleAddTransaction = (newTransaction:Transaction)=>{
    setTransactions(prev=>[...prev,newTransaction]);
    setShowForm(prev=>!prev);
  }

  const deleteTransaction = (id:number)=>{
    console.log(transactions);
    setTransactions(prev=>prev.filter(item=>item.id!==id))
  }

 
  return(
    <main className="container">
      <SummaryCards totalExpense = {totalExpense} totalIncome={incomeBalance} currentBalance={currentBalance} />
      <section className="add-transaction-section">
        {!showForm && (
           <div className="add-transaction-btn-container"><button className="add-transaction-btn" onClick={handleAddTransactionClick}><img src={AddBtnIcon} alt="Add transaction"/>Add Transaction</button></div>
        )}
        {showForm && (<AddTransaction handleClick={handleAddTransactionClick} onAdd={handleAddTransaction}/>)}
      <ExpenseChart data = {categoryTotals}/>
      <TransactionList transactions={transactions} onDelete={deleteTransaction}/>
      </section>
    </main>
  )
}

export default App;