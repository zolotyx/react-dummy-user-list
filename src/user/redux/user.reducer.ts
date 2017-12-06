import { createReducer } from 'redux-act';
import { Dictionary } from '../../utils';
import { User } from '../models/user';
import { fetchUsers, fetchUsersError, fetchUsersSuccess } from './user.actions';

export interface UserState {
  ids: string[];
  entities: Dictionary<User>;
  loading: boolean;
}

export const initialState: UserState = {
  ids: [],
  entities: {},
  loading: false
};

export const userReducer = createReducer<UserState>(
  {
    [fetchUsers.toString()]: (state, params) => ({
      ...state,
      loading: true
    }),
    [fetchUsersSuccess.toString()]: (state, users: User[]) => {
      return {
        ...state,
        ids: users.map((user) => user.id),
        entities: users.reduce((memo, user) => ({ ...memo, [user.id]: user }), {}),
        loading: false
      };
    },
    [fetchUsersError.toString()]: (state, params) => ({
      ...state,
      loading: false
    })
  },
  initialState
);
