import React from 'react'
import { GlobalContext } from './GlobalState'

const Balance = () => {
    const{transactions} =React.useContext(GlobalContext);
    const amount = transactions.map (transaction=>transaction.amount )
    const total =  amount.reduce((Total,new_value)=>(Total+new_value),0)
    return (
        <div>
            <h1>Balance</h1>
            <h1 id= "balance">${total}</h1>
        </div>
    )
}

export default Balance
