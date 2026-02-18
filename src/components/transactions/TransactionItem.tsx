import "./TransactionList.css"

export function TransactionItem({transaction,onDelete}){
    return(
        <div className="transaction-item">
         
             <div>
                   <h4>{transaction.title}</h4>
           
            <div className="transaction-bottom">
                <p>{transaction.category} <span> &#36;{transaction.amount}</span></p>
               
                <button onClick={()=>onDelete(transaction.id)}>Delete</button>
            </div>
             </div>
        </div>
    )
}