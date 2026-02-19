import "./TransactionList.css"
import binIcon from "/public/bin-icon.png"

export function TransactionItem({transaction,onDelete}){
    return(
        <div className="transaction-item">
         
             <div>
                   <h4>{transaction.title}</h4>
           
            <div className="transaction-bottom">
                <p>{transaction.category} <span> &#36;{transaction.amount}</span></p>
               
                <button onClick={()=>onDelete(transaction.id)}><img src={binIcon}/></button>
            </div>
             </div>
        </div>
    )
}