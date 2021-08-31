import {User} from '../actions';
import {Action, ActionTypes} from '../actions/types';

export const usersReducer = (state: User[] = [], action: Action) => {

	switch (action.type) {
		case ActionTypes.fetchUsers:
			return action.payload;

		case ActionTypes.deleteUser:
			return action.payload;

		default:
			return state;
	}
};