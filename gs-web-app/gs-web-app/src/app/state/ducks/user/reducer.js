import * as actionTypes from './actionTypes';

const initialData = {
    userData: null,
};

export default function reducer(state = initialData, action) {
    switch (action.type) {
        case actionTypes.SET_USER_DATA:
            const {userData} = action.payload;

            return {
                ...state, userData
            };


        case actionTypes.CLEAR_USER_DATA:
            return {
                ...state, userData: null
            };

        default:
            return state;
    }
}
