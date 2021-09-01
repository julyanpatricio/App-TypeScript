import axios from 'axios';
import { Dispatch } from 'redux';
import { ActionTypes } from './types';

export interface User {
	id: number;
	name: string;
	lastName: string;
}

export interface FetchUsersAction {
  type: ActionTypes.fetchUsers;
  payload: User[];
}
export interface DeleteUsersAction {
  type: ActionTypes.deleteUser;
  payload: User[];
}

const url = 'http://localhost:3001/api/user';

export const fetchUsers = () => {
	return async (dispatch: Dispatch) => {
		const response = await axios.get<User[]>(url); //entre <> le estoy diciendo que de lo que me responde axios voy a usar estos datos con estos tipos (declarado en la interface User)
		dispatch<FetchUsersAction>({
			type: ActionTypes.fetchUsers,
			payload: response.data,
		});
	};
};

export const deleteUser = () => { 
	return async (dispatch: Dispatch) => {
		const response = await axios.delete<User[]>(url); //enviar por body el id del user
		dispatch<DeleteUsersAction>({
			type: ActionTypes.deleteUser,
			payload: response.data,
		});
	};
};