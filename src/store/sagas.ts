import createSagaMiddleware from 'redux-saga';
import { all } from 'redux-saga/effects';
import { userSaga } from '../user/redux/user.sagas';

export function* rootSaga() {
  yield all([
    userSaga()
  ]);
}

export const sagaMiddleware = createSagaMiddleware();
