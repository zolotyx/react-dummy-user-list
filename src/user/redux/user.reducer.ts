import { createReducer } from 'redux-act';
import { Dictionary, ResponseMeta } from '../../utils';
import { User } from '../models/user';
import {
  fetchUserDetailsSuccess,
  fetchUsers, fetchUsersError,
  fetchUsersSuccess, selectUser
} from './user.actions';

export interface UserState {
  meta: ResponseMeta;
  ids: string[],
  byId: Dictionary<User>;
  selectedId: number | null;
  detailsById: Dictionary<User>;
  error: string;
  loading: boolean;
}

export const initialState: UserState = {
  meta: {
    page: 1,
    total_pages: 0,
    per_page: 4,
    total: 0
  },
  ids: [],
  byId: {},
  detailsById: {},
  selectedId: null,
  error: '',
  loading: false
};

export const userReducer = createReducer<UserState>(
  {
    [fetchUsers.toString()]: (state: UserState): UserState => ({
      ...state,
      loading: true
    }),
    [selectUser.toString()]: (state: UserState, payload): UserState => ({
      ...state,
      selectedId: payload
    }),
    [fetchUserDetailsSuccess.toString()]: (state: UserState, payload): UserState => ({
      ...state,
      ...{
        [payload.id]: payload
      }
    }),
    [fetchUsersSuccess.toString()]: (state: UserState, payload): UserState => {
      const { page, per_page, total, total_pages }:ResponseMeta = payload;
      return {
        ...state,
        meta: { page, per_page, total, total_pages },
        ids: payload.data.map((user: User) => user.id),
        byId: payload.data.reduce((
          memo: Dictionary<User>,
          user: User
        ) => ({ ...memo, [user.id]: user }), {}),
        error: '',
        loading: false
      };
    },
    [fetchUsersError.toString()]: (state: UserState, payload): UserState => ({
      ...state,
      error: payload,
      loading: false
    })
  },
  initialState
);
