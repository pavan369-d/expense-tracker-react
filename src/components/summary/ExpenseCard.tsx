import AmountDecreaseIcon from "/public/amount-decrease.png";
import EditIcon from "/public/edit-symbol.png"
import "./SummaryCards.css"

export function ExpenseCard(){
    return(
        <div className="expense-card">
            <div className="amount-details">
                <div className="amount-title">Total Expenses</div>
                <div className="amount-number">
                    <div>$0.00</div>
                    <button className="amount-edit-btn"><img src={EditIcon}/></button>
                </div>

            </div>
            <div className="expense-img">
                <img src={AmountDecreaseIcon} alt="Total expenses"/>
            </div>
        </div>
    )
}