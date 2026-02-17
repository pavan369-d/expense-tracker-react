import CurrencyIcon from "/public/dollar.png";
import EditIcon from "/public/edit-symbol.png"
import "./SummaryCards.css"
export function BalanceCard(){
    return(
        <div className="balance-card">
            <div className="amount-details">
                <div className="amount-title">Current Balance</div>
                <div className="amount-number">
                    <div>$0.00</div>
                    <button className="amount-edit-btn"><img src={EditIcon}/></button>
                </div>

            </div>
            <div className="balance-img">
                <img src={CurrencyIcon} alt="Current balance"/>
            </div>
        </div>
    )
}