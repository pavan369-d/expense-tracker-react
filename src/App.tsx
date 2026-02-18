import { useEffect, useState } from "react";
import SummaryCards from "./components/summary/SummaryCards";
import { AddTransaction } from "./components/transactions/AddTransaction";
import AddBtnIcon from "/public/add-btn.png"
import { ExpenseChart } from "./components/analytics/ExpenseChart";
import { TransactionList } from "./components/transactions/TransactionList";

function App(){
  const [showForm,setShowForm] = useState(false);

  const expenses = [
    { id: 1, title: "Food", amount: 500, category: "Groceries" },
  { id: 2, title: "Rent", amount: 8000, category: "Housing" },
  { id: 3, title: "Travel to Meghalaya", amount: 1200, category: "Travel" },
  { id: 4, title: "Netflix", amount: 149, category: "Subscriptions" },
  {id:5,title:"Gas bill",amount:1000,category:"Utilities"},
  {id:6,title:"Vegetables",amount:200,category:"Groceries"},
  {id:7,title:"Hotel",amount:10000,category:"Housing"},
  {id:8,title:"Travel to Himalaya",amount:8000,category:"Travel"},
  {id:9,title:"Amazon",amount:350,category:"Subscriptions"}
  ]

  const [transactions,setTransactions] = useState(expenses);

  const categoryTotals = expenses.reduce((acc,expense)=>{
    const existing = acc.find(item=>item.category===expense.category);

    if(existing){
      existing.amount += expense.amount;
    }else{
      acc.push({category:expense.category,amount:expense.amount})
    }
    return acc;
  },[] as {category:string,amount:number}[]); 



  const handleAddTransactionClick = () =>{
    setShowForm((prev)=>!prev);
    
  }

  const deleteExpense = (id:number)=>{
    console.log(transactions);
    setTransactions(prev=>prev.filter(item=>item.id!==id))
  }
  // useEffect(()=>{
  //   console.log(showForm);
  // },[showForm])
 
  return(
    <main className="container">
      <SummaryCards/>
      <section className="add-transaction-section">
        {!showForm && (
           <div className="add-transaction-btn-container"><button className="add-transaction-btn" onClick={handleAddTransactionClick}><img src={AddBtnIcon} alt="Add transaction"/>Add Transaction</button></div>
        )}
        {showForm && (<AddTransaction handleClick={handleAddTransactionClick}/>)}
      <ExpenseChart data = {categoryTotals}/>
      <TransactionList transactions={transactions} onDelete={deleteExpense}/>
      </section>
    </main>
  )
}

export default App;