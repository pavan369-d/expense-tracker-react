import {
    PieChart,
    Pie,
    Cell,
    Tooltip,
    Legend,
    ResponsiveContainer
} from "recharts";
import "./ExpenseChart.css"

export function ExpenseChart({ data }: { data: { category: string; amount: number }[] }) {
 const colors = [
    "#3c49e5",
    "#00c49f",
    "#ffbb28",
    "#ff8042",
    "#a28eff",
    "#ff4f81"
 ]

 const total = data.reduce((sum,item)=>sum+item.amount,0);

 const getPercentage = (amount:number)=> ((amount/total)*100).toFixed(1);

    return (
    <div className="expensechart-section">
        <h2 className="expensechart-title">Spending Breakdown</h2>
        <div className="expensechart-container">
     <ResponsiveContainer className="expense-chart" width="100%"  
     height={300}>
      <PieChart>
        <Pie
          data={data}
          dataKey="amount"
          nameKey="category"
          outerRadius={100}
          label
        >
          {data.map((entry, index) => (
            <Cell key={index} 
            fill={colors[index%colors.length]}/>
          ))}
        </Pie>
        <Tooltip />
         <Legend
      layout="vertical"
      align="right"
      verticalAlign="middle"
    />
      </PieChart>
    </ResponsiveContainer>
    <div className="expensechart-categories">
        {data.map((item,index)=><div className="category-items" key={index}>
            <div><span className="category-color" style={{backgroundColor:colors[index%colors.length]}}></span> {item.category}</div>
            <div>{item.amount}  &#36;
                 <span className="category-percentage">
                {getPercentage(item.amount)}%
                </span>
            </div>
        </div>)}
    </div>
        </div>
    
    </div>
  );
}

