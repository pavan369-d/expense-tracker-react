import { useState } from "react";
import SummaryCards from "./components/summary/SummaryCards";
import { AddTransaction } from "./components/transactions/AddTransaction";
import AddBtnIcon from "/public/add-btn.png"

function App(){
  const [showForm,setShowForm] = useState(false);

  const handleAddTransactionClick = () =>{
    setShowForm((prev)=>!prev);
    
  }
 
  return(
    <main className="container">
      <SummaryCards/>
      <section className="add-transaction-section">
          {
        showForm ? <AddTransaction/> : <div className="add-transaction-btn-container"><button className="add-transaction-btn" onClick={handleAddTransactionClick}><img src={AddBtnIcon} alt="Add transaction"/>Add Transaction</button></div>
      }
      </section>
    </main>
  )
}

export default App;