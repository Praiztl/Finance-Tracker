// financeReducer.js
import { ADD_INCOME, ADD_EXPENSE } from './actions';

const initialState = {
    income: [], // Change to your desired initial state for income data
    expenses: [], // Change to your desired initial state for expense data
};

const financeReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_INCOME:
            return {
                ...state,
                income: [...state.income, action.payload],
            };
        case ADD_EXPENSE:
            return {
                ...state,
                expenses: [...state.expenses, action.payload],
            };
        default:
            return state;
    }
};

export default financeReducer;
