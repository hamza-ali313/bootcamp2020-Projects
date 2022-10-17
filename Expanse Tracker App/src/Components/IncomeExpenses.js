import React,{useContext} from 'react'
import { GlobalContext } from './GlobalState'

const IncomeExpenses = () => {
    const {transactions} = useContext(GlobalContext);
 const amounts = transactions.map((transaction)=>(transaction.amount));
 const income = amounts
 .filter((item)=>(item>0))
 .reduce((Totalitem,item)=>(Totalitem+item),0);

 const Expenses = amounts
 .filter((item)=>(item<0))
 .reduce((Totalitem,item)=>(Totalitem-item),0);



    return (
        <div className="inc-exp-container">
            <div>
                <h1>Income</h1>
                <p id="money-plus" className="money plus">{income}</p>
            </div>
            <div >
                <h1>Expenses</h1>
                <p  id="money-minus" className="money minus">{Expenses}</p>
            </div>
            
        </div>
    )
}

export default IncomeExpenses
