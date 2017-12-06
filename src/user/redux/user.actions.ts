import { createAction } from 'redux-act';
import { RequestParams } from '../../utils';
import { User } from '../models/user';

export const fetchUsers = createAction<RequestParams>('@user/fetchUsers');
export const selectUser = createAction<number>('@user/fetchUser');
export const fetchUserDetails = createAction<number>('@user/fetchUserDetails');
export const fetchUserDetailsSuccess = createAction<User>('@user/fetchUserDetailsSuccess');
export const fetchUsersSuccess = createAction<User[]>('@user/fetchUsersSuccess');
export const fetchUsersError = createAction<string>('@user/fetchUsersError');
