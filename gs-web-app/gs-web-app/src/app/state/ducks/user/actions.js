import * as types from './actionTypes';

export const setUserData = (userData) => ({type: types.SET_USER_DATA, payload: {userData}});

export const clearUserData = () => ({type: types.CLEAR_USER_DATA});
