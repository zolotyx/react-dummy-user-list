import {
  userListReducer, initialListState, initialDetailsState,
  userDetailsReducer
} from './user.reducer';
import { fetchUserDetailsSuccess, fetchUsers, fetchUsersError, selectUser } from './user.actions';
import { User } from '../models/user';


describe('user reducer', () => {
  it('should return valid state if fetchUsers action is received', () => {
    expect(userListReducer(initialListState, fetchUsers({}))).toEqual({
      ...initialListState,

      loading: true

    });
  });

  it('should return valid state if fetchUsers action is received', () => {
    const userId = '1';
    expect(userDetailsReducer(initialDetailsState, selectUser(userId))).toEqual({
      ...initialDetailsState,
      selectedId: userId
    });
  });
  it('should return valid state if fetchUserDetailsSuccess action is received', () => {
    const user: User = {
      id: '1',
      first_name: 'test',
      last_name: 'test',
      avatar: 'test'
    };
    expect(userDetailsReducer(initialDetailsState, fetchUserDetailsSuccess(user))).toEqual({
      ...initialDetailsState,
      error: '',
      byId: {
        [user.id]: user
      }
    });
  });
  it('should return valid state if fetchUsersError action is received', () => {
    const error = 'error';
    expect(userListReducer(initialListState, fetchUsersError(error))).toEqual({
      ...initialListState,
      loading: false,
      error
    });
  });

});