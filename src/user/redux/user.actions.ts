import { createAction } from 'redux-act';
import { RequestParams } from '../../shared/utils';
import { User } from '../models/user';
import { UsersResponse } from './user.reducer';

export const fetchUsers = createAction<RequestParams>('@user/fetchUsers');
export const selectUser = createAction<string>('@user/fetchUser');
export const fetchUserDetailsSuccess = createAction<User>('@user/fetchUserDetailsSuccess');
export const fetchUsersSuccess = createAction<UsersResponse>('@user/fetchUsersSuccess');
export const fetchUsersError = createAction<string>('@user/fetchUsersError');
export const fetchUserDetailsError = createAction<string>('@user/fetchUserDetailsError');
