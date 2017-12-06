import { createSelector } from 'reselect';
import { AppState } from '../../store/store';
import { UserState } from './user.reducer';

export const userState = (state: AppState): UserState => state.user;

export const selectUsersMeta = createSelector(
  userState, (uState: UserState) => {
    return uState.meta;
  }
);

export const selectUsers = createSelector(
  userState, (uState: UserState) => {
    return uState.ids.map(id => uState.byId[id]);
  }
);

export const selectCurrentUserId = createSelector(
  userState, (uState: UserState) => {
    return uState.selectedId;
  }
);


export const selectedUserDetails = createSelector(
  userState,
  selectCurrentUserId,
  (uState: UserState, selectedUserId) => {
    return selectedUserId ? uState.detailsById[selectedUserId] : null;
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
