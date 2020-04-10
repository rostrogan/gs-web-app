import * as actionTypes from './actionTypes';

const initialData = {
    groups: null
};

export default function reducer(state = initialData, action) {
    switch (action.type) {
        case actionTypes.SET_GROUPS_DATA:
            const {groups} = action.payload;

            return {
                ...state, groups
            };

        default:
            return state;
    }
}
