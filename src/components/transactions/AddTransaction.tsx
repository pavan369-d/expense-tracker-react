import "./AddTransaction.css"

export function AddTransaction({handleClick}){
    return(
        <section className="add-transaction-form">
            <div className="form-title">
                <div className="form-title-text">Add New Transaction</div>
                <div className="form-cancel"><button onClick={handleClick}>Cancel</button></div>
            </div>
            <div className="form-category">
                <div className="form-expense">Expense</div>
                <div className="form-income">Income</div>

            </div>
            <form className="add-form">
                <div className="form-group">
                    <div className="form-title">
                        <label htmlFor="amount">Amount</label>
                    </div>
                    <div className="form-input">
                        <input type="text" id="amount" placeholder="0.00" />
                    </div>
                </div>
                   <div className="form-group">
                    <div className="form-title">
                        <label htmlFor="amount">Category</label>
                    </div>
                    <div className="form-input">
                        <select>
                            <option>Select a category</option>
                            <option value="Subscription">Subscription</option>
                            <option value="Housing">Housing</option>
                            <option value="Groceries">Groceries</option>
                            <option value="Transportation">Transportation</option>
                            <option value="Utilities">Utilities</option>
                            <option value="Entertainment">Entertainment</option>
                            <option value="Healthcare">Healthcare</option>
                            <option value="Shopping">Shopping</option>
                            <option value="Dining">Dining</option>
                            <option value="Other">Other</option>
                        </select>
                    </div>
                </div>
                   <div className="form-group">
                    <div className="form-title">
                        <label htmlFor="amount">Description</label>
                    </div>
                    <div className="form-input">
                        <input type="text" id="description" placeholder="Enter description" />
                    </div>
                </div>
                   <div className="form-group">
                    <div className="form-title">
                        <label htmlFor="amount">Date</label>
                    </div>
                    <div className="form-input">
                        <input type="date" id="date" />
                    </div>
                </div>
                <button className="add-transaction-btn">Add Transaction</button>
            </form>
        </section>
    )
}