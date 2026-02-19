import AmountIncreaseIcon from "/public/amount-increase.png";
import EditIcon from "/public/edit-symbol.png"
import "./SummaryCards.css"

export function IncomeCard({totalIncome}){
    return(
        <div className="income-card">
            <div className="amount-details">
                <div className="amount-title">Total Income</div>
                <div className="amount-number">
                    <div>$ {totalIncome || 0.00}</div>
                    <button className="amount-edit-btn"><img src={EditIcon}/></button>
                </div>

            </div>
            <div className="income-img">
                <img src={AmountIncreaseIcon} alt="Total income"/>
            </div>
        </div>
    )
}