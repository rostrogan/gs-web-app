import * as types from './actionTypes';

export const setGroupsData = (groups) => ({type: types.SET_GROUPS_DATA, payload: {groups}});

export const setFacultiesData = (faculties) => ({type: types.SET_FACULTIES_DATA, payload: {faculties}});
