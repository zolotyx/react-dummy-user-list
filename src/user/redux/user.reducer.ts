import { createReducer } from 'redux-act';
import { Dictionary, ResponseMeta } from '../../shared/utils';
import { User } from '../models/user';
import {
  fetchUserDetailsError,
  fetchUserDetailsSuccess,
  fetchUsers,
  fetchUsersError,
  fetchUsersSuccess, selectUser
} from './user.actions';
import { combineReducers } from 'redux';

export interface UserListState {
  meta: ResponseMeta;
  ids: string[];
  byId: Dictionary<User>;
  error: string;
  loading: boolean;
}

export const initialListState: UserListState = {
  meta: {
    page: 1,
    total_pages: 0,
    per_page: 4,
    total: 0
  },
  ids: [],
  byId: {},
  error: '',
  loading: false
};

export interface UserDetailsState {
  byId: Dictionary<User>;
  error: string;
  selectedId: number | null;
  loading: boolean;
}

export const initialDetailsState: UserDetailsState = {
  selectedId: null,
  byId: {},
  error: '',
  loading: false
};

export interface UserState {
  list: UserListState;
  details: UserDetailsState;
}

export const initialState: UserState = {
  list: initialListState,
  details: initialDetailsState
};

export type UsersResponse = ResponseMeta & {
  data: User[];
};

export const userListReducer = createReducer<UserListState>(
  {
    [fetchUsers.toString()]: (state: UserListState): UserListState => ({
      ...state,
      loading: true
    }),

    [fetchUsersSuccess.toString()]: (state: UserListState, payload: UsersResponse): UserListState => {
      const { page, per_page, total, total_pages }: ResponseMeta = payload;
      return {
        ...state,
        meta: { page, per_page, total, total_pages },
        ids: payload.data.map((user: User) => user.id),
        byId: payload.data.reduce(
          (
            memo: Dictionary<User>,
            user: User
          ) => ({ ...memo, [user.id]: user }),
          {}
        ),
        error: '',
        loading: false
      };
    },
    [fetchUsersError.toString()]: (state: UserListState, error: string): UserListState => ({
      ...state,
      error,
      loading: false
    })
  },
  initialListState
);

export const userDetailsReducer = createReducer<UserDetailsState>(
  {
    [selectUser.toString()]: (state: UserDetailsState, payload): UserDetailsState => ({
      ...state,
      error: '',
      selectedId: payload
    }),
    [fetchUserDetailsSuccess.toString()]: (state: UserDetailsState, payload: User): UserDetailsState => {
      const byId = {
        ...state.byId,
        [payload.id]: payload
      };
      return {
        ...state,
        error: '',
        byId
      };
    },
    [fetchUserDetailsError.toString()]: (state: UserDetailsState, error: string): UserDetailsState => {
      return {
        ...state,
        error
      };
    }
  },
  initialDetailsState
);

export const userReducer = combineReducers({
  list: userListReducer,
  details: userDetailsReducer,
});