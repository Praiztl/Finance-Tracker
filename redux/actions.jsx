// actions.js
// Define your action types as constants
export const SET_USER = 'SET_USER';
export const ADD_INCOME = 'ADD_INCOME';
export const ADD_EXPENSE = 'ADD_EXPENSE';
// ... add more action types as needed

// Define your action creators
export const setUser = (userData) => ({
    type: SET_USER,
    payload: userData,
});

export const addIncome = (incomeData) => ({
    type: ADD_INCOME,
    payload: incomeData,
});

export const addExpense = (expenseData) => ({
    type: ADD_EXPENSE,
    payload: expenseData,
});
// ... add more action creators as needed
