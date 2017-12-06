import { createSelector } from 'reselect';
import { AppState } from '../../store/store';
import { UserState } from './user.reducer';


export const userState = (state: AppState): UserState => state.user;

export const selectUsers = createSelector(
  userState, (uState: UserState) => {
    return uState.ids.map(id => uState.entities[id]);
  }
);
export const usersLoading = createSelector(
  userState, (uState: UserState) => {
    return uState.loading;
  }
);
