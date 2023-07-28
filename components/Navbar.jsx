// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/register">Register</Link>
                </li>
                <li>
                    <Link to="/balance">Balance</Link>
                </li>
                <li>
                    <Link to="/budget">Budget</Link>
                </li>
                <li>
                    <Link to="/transactions">Transactions</Link>
                </li>
                <li>
                    <Link to="/charts/bar">Bar Chart</Link>
                </li>
                <li>
                    <Link to="/charts/pie">Pie Chart</Link>
                </li>
                <li>
                    <Link to="/reports/monthly">Monthly Report</Link>
                </li>
                <li>
                    <Link to="/reports/yearly">Yearly Report</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
