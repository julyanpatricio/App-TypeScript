import { FetchUsersAction, DeleteUsersAction } from './index';


export enum ActionTypes {
	fetchUsers,
	deleteUser
}

export type Action = FetchUsersAction | DeleteUsersAction;