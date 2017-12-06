import { combineReducers } from 'redux';
import { userReducer } from '../user/redux/user.reducer';

export const rootReducer = combineReducers({
  user: userReducer
});
