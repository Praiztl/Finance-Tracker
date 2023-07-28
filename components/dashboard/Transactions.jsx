// Transactions.js
import React, { useState } from 'react';

const Transactions = () => {
    const [amount, setAmount] = useState(0);
    const [description, setDescription] = useState('');

    const handleAddTransaction = () => {
        // Handle adding transaction logic here
    };

    return (
        <div>
            <h2>Add Transaction</h2>
            <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="Enter amount"
            />
            <input
                type="text"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Enter description"
            />
            <button onClick={handleAddTransaction}>Add Transaction</button>
        </div>
    );
};

export default Transactions;
