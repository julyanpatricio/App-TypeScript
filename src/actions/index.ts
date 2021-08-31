import axios from 'axios';
import { Dispatch } from 'redux';
import { ActionTypes } from './types';

interface User {
	id: number;
	name: string;
	lastName: string;
}

const url = 'https://localhost:3001/user';

export const fetchUsers = () => {
	return async (dispatch: Dispatch) => {
		const response = await axios.get<User[]>(url); //entre <> le estoy diciendo que de lo que me responde axios voy a usar estos datos con estos tipos (declarado en la interface User)
		dispatch({
			type: ActionTypes.fetchUsers,
			payload: response.data,
		});
	};
};