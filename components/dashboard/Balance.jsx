// Balance.js
import React from 'react';

const Balance = () => {
    // Get user balance from Redux or context API
    const userBalance = 1000; // Replace with actual user balance

    return (
        <div>
            <h2>Current Balance</h2>
            <p>${userBalance}</p>
        </div>
    );
};

export default Balance;
