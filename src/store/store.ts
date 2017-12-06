import { Store } from 'redux';
import { UserState } from '../user/redux/user.reducer';
import initStore from './initStore';
import { rootSaga, sagaMiddleware } from './sagas';

export type AppState = {
  user: UserState
};

export const store: Store<AppState> = initStore();


sagaMiddleware.run(rootSaga);
