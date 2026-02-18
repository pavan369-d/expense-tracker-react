import { TransactionItem } from "./TransactionItem";
import "./TransactionList.css"

export function TransactionList({transactions,onDelete}){
    return(
        <div className="transaction-section">
            <h2>Recent Transactions</h2>
            <div className="transaction-list">
                {
                transactions.map((tx)=>(
                    <TransactionItem key={tx.id}
                    transaction={tx}
                    onDelete={onDelete}/>
                ))
            }
            </div>
        </div>
    )
}