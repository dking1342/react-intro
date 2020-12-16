import React, { useState, useContext } from 'react'
import { GlobalContext } from '../context/GlobalState';


export const AddTransaction = () => {
    const [text, setText] = useState('');
    const [amount, setAmount] = useState(0);

    const { addTransactions } = useContext(GlobalContext);

    const onSubmit = (e) => {
      e.preventDefault();
      const newTransaction = {
        text,
        amount: Number(amount)
      }
      addTransactions(newTransaction);
      setText('');
      setAmount(0);
    }


    return (
        <>
          <h3>Add new transaction</h3>
          <form action="" onSubmit={ onSubmit }>
            <div className="form-control">
                <label htmlFor="text">Text</label>
                <input type="text" value={ text } onChange={ (e)=> setText(e.target.value) }  placeholder="Enter text..."/>
            </div>
            <div className="form-control">
                <label htmlFor="amount">Amount</label>
                <input type="number" value={ amount } onChange={ (e)=> setAmount(e.target.value) }  placeholder="Enter amount..."/>
            </div>
            <button className="btn">Add Transaction</button>
          </form>  
        </>
    )
}
