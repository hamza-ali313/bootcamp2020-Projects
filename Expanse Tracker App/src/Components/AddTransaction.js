import React from 'react'
import { GlobalContext } from './GlobalState'

const AddTransaction = () => {
const [text, setText] = React.useState("")
const [amount, setAmount] = React.useState()

const {addTransaction}=React.useContext(GlobalContext);

const Submit = e=>{
    e.preventDefault();

const newtransaction={
 id:Math.floor(Math.random()*10000),
 text:text,
 amount:+amount

}
addTransaction(newtransaction);
}


    return (
        <div>
            <form onSubmit={Submit}   >
                <div className="form-control">
                    <label htmlFor="text"> description</label>
                    <input type="text" value={text} onChange={(e)=>setText(e.target.value)} placeholder="Enter description"/>
                </div>
                <div className="form-control">
                    <label htmlFor="text"> Amount</label>
                    <input type="number" value={amount} onChange={(e)=>setAmount(e.target.value)} placeholder="Enter Amount"/>
                </div>
                <button className="btn">Add Transaction</button>
            </form>
        </div>
    )
}

export default AddTransaction
