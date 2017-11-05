import { actionType } from '../../action-types';

export const studentReducer = (state = {students:[]}, action) => {
    switch (action.type) {
		case actionType.REFRESH_STUDENTS_REQUEST:
			return Object.assign({}, state, { students: [] });
		case actionType.REFRESH_STUDENTS_DONE:
			return Object.assign({}, state, { students: action.students });
		default:
			return state;
	}

}
