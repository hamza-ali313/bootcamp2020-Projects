import React from 'react'
import { GlobalContext } from './GlobalState'
import Transaction from './Transaction'

const TransactionList = () => {
    const {transactions}= React.useContext(GlobalContext)
    
    return (
        <div>
            <h1>History</h1>
            <ul  className="list">
                {transactions.map(transaction=>(<Transaction key={transaction.id} transaction={transaction}/>))}
            
            
               

            </ul>
        </div>
    )
}

export default TransactionList


