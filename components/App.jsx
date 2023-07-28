import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Balance from './components/dashboard/Balance';
import Budget from './components/dashboard/Budget';
import Transactions from './components/dashboard/Transactions';
import BarChart from './components/charts/BarChart';
import PieChart from './components/charts/PieChart';
import MonthlyReport from './components/reports/MonthlyReport';
import YearlyReport from './components/reports/YearlyReport';

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/balance" component={Balance} />
          <Route exact path="/budget" component={Budget} />
          <Route exact path="/transactions" component={Transactions} />
          <Route exact path="/charts/bar" component={BarChart} />
          <Route exact path="/charts/pie" component={PieChart} />
          <Route exact path="/reports/monthly" component={MonthlyReport} />
          <Route exact path="/reports/yearly" component={YearlyReport} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
