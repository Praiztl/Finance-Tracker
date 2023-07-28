// userReducer.js
import { SET_USER } from './actions';

const initialState = {
    user: null, // Change to your desired initial state for user data
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER:
            return {
                ...state,
                user: action.payload,
            };
        default:
            return state;
    }
};

export default userReducer;
