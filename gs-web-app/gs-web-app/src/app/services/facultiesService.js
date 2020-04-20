import {getState} from '../state/store';
import {makeSelectFacultiesData} from '../state/selectors/global';

const getFacultyById = (facultyId) => {
    const faculties = makeSelectFacultiesData()(getState());

    if (faculties && facultyId) {
        const facultyTarget = faculties.find((faculty) => faculty?._id === facultyId);

        const {name} = facultyTarget || {};

        return `${name}`;
    }
};

export default {
    getFacultyById,
}
