import { createSelector } from 'reselect';
import { AppState } from '../../store/store';
import { UserDetailsState, UserListState, UserState } from './user.reducer';

export const userState = (state: AppState): UserState => state.user;

export const userListState = createSelector(
  userState, (uState: UserState) => uState.list
);

export const userDetailsState = createSelector(
  userState, (uState: UserState) => uState.details
);

export const selectUsersMeta = createSelector(
  userListState, (state: UserListState) => {
    return state.meta;
  }
);

export const selectUsers = createSelector(
  userListState, (uState: UserListState) => {
    return uState.ids.map(id => uState.byId[id]);
  }
);

export const selectCurrentUserId = createSelector(
  userDetailsState, (uState: UserDetailsState) => {
    return uState.selectedId;
  }
);

export const selectedUserDetails = createSelector(
  userDetailsState,
  selectCurrentUserId,
  (uState: UserDetailsState, selectedUserId: number) => {
    return selectedUserId ? uState.byId[selectedUserId] : null;
  }
);

export const selectUserDetailsError = createSelector(
  userDetailsState, (uState: UserDetailsState) => {
    return uState.error;
  }
);

export const selectUsersError = createSelector(
  userListState, (uState: UserListState) => {
    return uState.error;
  }
);

export const usersLoading = createSelector(
  userListState, (uState: UserListState) => {
    return uState.loading;
  }
);