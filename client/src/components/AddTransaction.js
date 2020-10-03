import React, { useContext, useState } from 'react';
import { GlobalContext } from '../context/GlobalState';

const AddTransaction = () => {

    const [title, setTitle ] = useState('');
    const [amount, setAmount] = useState(0);

    const { addTransaction } = useContext(GlobalContext);
    const onSubmit = e => {
      e.preventDefault();

      const newTransaction = {
        title,
        amount: +amount,
      }
      addTransaction(newTransaction);
    }

    return (
        <>
      <h3>Add new transaction</h3>
      <form  onSubmit={onSubmit} >
        <div className="form-control">
          <label htmlFor="text">Title</label>
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)}  placeholder="Enter title..." />
        </div>
        <div className="form-control">
          <label htmlFor="amount"
            >Amount <br />
            (negative - expense, positive - income)</label
          >
          <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)}  placeholder="Enter amount..." />
        </div>
        <button className="btn">Add transaction</button>
      </form>
    </>
    )
}

export default AddTransaction
