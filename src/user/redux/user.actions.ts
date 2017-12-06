import { createAction } from 'redux-act';
import { RequestParams } from '../../utils';
import { User } from '../models/user';

export const fetchUsers = createAction<RequestParams>('@user/fetchUsers');
export const fetchUsersSuccess = createAction<User[]>('@user/fetchUsersSuccess');
export const fetchUsersError = createAction<any>('@user/fetchUsersError');
