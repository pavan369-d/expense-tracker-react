import WalletPng from "/public/wallet.png";
import "./SummaryCards.css"
import { IncomeCard } from "./IncomeCard";
import { ExpenseCard } from "./ExpenseCard";
import { BalanceCard } from "./BalanceCard";
function SummaryCards({totalExpense,totalIncome,currentBalance}){
    return(
        <header>
            <div className="logo">
                <div className="logo-img">
                    <img src={WalletPng} alt="wallet img" />
                </div>
                <div className="logo-content">
                    <h1>Budget Organizer</h1>
                    <div>Track your income and expenses</div>
                </div>
            </div>
            <div className="summary-cards-section">
                <IncomeCard totalIncome={totalIncome}/>
                <ExpenseCard totalExpense={totalExpense} />
                <BalanceCard currentBalance={currentBalance}/>
            </div>
        </header>
    )
}

export default SummaryCards;