import { createSelector } from 'reselect';
import { AppState } from '../../store/store';
import { UserState } from './user.reducer';

export const userState = (state: AppState): UserState => state.user;

export const selectUsersMeta = createSelector(
  userState, (uState: UserState) => {
    return uState.data;
  }
);

export const selectUsers = createSelector(
  userState, (uState: UserState) => {
    return uState.data.data;
  }
);
export const selectUsersError = createSelector(
  userState, (uState: UserState) => {
    return uState.error;
  }
);

export const usersLoading = createSelector(
  userState, (uState: UserState) => {
    return uState.loading;
  }
);
