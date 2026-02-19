
type ExpenseCategory = "Groceries" | "Housing" | "Travel" | "Subscriptions" | "Utilities";
type IncomeCategory = "Salary" | "Freelance" | "Bonus" | "Investment";

export interface Transaction{
    id:number;
    type:"income" | "expense";
    title:string;
    amount:number;
    category: ExpenseCategory | IncomeCategory;
    date:string;
}

