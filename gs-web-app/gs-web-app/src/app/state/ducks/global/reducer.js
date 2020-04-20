import * as actionTypes from './actionTypes';

const initialData = {
    groups: null,
    faculties: null,
};

export default function reducer(state = initialData, action) {
    switch (action.type) {
        case actionTypes.SET_GROUPS_DATA:
            const {groups} = action.payload;

            return {
                ...state, groups
            };

        case actionTypes.SET_FACULTIES_DATA:
            const {faculties} = action.payload;

            return {
                ...state, faculties
            };

        default:
            return state;
    }
}
