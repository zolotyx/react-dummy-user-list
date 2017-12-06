import { createReducer } from 'redux-act';
import { ResponseMeta } from '../../utils';
import { User } from '../models/user';
import { fetchUsers, fetchUsersError, fetchUsersSuccess } from './user.actions';

export interface UserState {
  data: ResponseMeta & { data: User[] };
  error: string;
  loading: boolean;
}

export const initialState: UserState = {
  data: {
    page: 1,
    total_pages: 0,
    per_page: 4,
    total: 0,
    data: []
  },
  error: '',
  loading: false
};

export const userReducer = createReducer<UserState>(
  {
    [fetchUsers.toString()]: (state) => ({
      ...state,
      loading: true
    }),
    [fetchUsersSuccess.toString()]: (state, payload) => {
      return {
        ...state,
        data: payload,
        error: '',
        loading: false
      };
    },
    [fetchUsersError.toString()]: (state, payload) => ({
      ...state,
      error: payload.data.message,
      loading: false
    })
  },
  initialState
);
