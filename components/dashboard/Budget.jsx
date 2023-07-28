// Budget.js
import React, { useState } from 'react';

const Budget = () => {
    const [budget, setBudget] = useState(0);

    const handleSetBudget = () => {
        // Handle setting budget logic here
    };

    return (
        <div>
            <h2>Set Monthly Budget</h2>
            <input
                type="number"
                value={budget}
                onChange={(e) => setBudget(e.target.value)}
                placeholder="Enter your budget"
            />
            <button onClick={handleSetBudget}>Set Budget</button>
        </div>
    );
};

export default Budget;
