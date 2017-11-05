import { actionType } from '../../action-types';

export const resourceReducer = (state = {resource:[]}, action) => {
    switch (action.type) {
		case actionType.REFRESH_RESOURCE_REQUEST:
			return Object.assign({}, state, { resource: [] });
		case actionType.REFRESH_RESOURCE_DONE:
			return Object.assign({}, state, { resource: action.resource });
		default:
			return state;
	}

}
