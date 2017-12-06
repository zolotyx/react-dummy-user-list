import { Action } from 'redux-act';
/**
 * Watch request to fetch group trends data for grid
 */
import { all, call, put, takeLatest } from 'redux-saga/effects';
import { RequestParams } from '../../utils';
import { UserService } from '../services/user.service';
import { fetchUsers, fetchUsersError, fetchUsersSuccess } from './user.actions';

export function* userSaga() {
  yield all([
    fetchUsersSaga(),
  ]);
}

function* fetchUsersSaga() {
  yield takeLatest(fetchUsers, fetchUsersWorker);
}

function* fetchUsersWorker(action: Action<RequestParams>) {
  try {
    const { data } = yield call(UserService.get, action.payload);
    yield put(fetchUsersSuccess(data));
  } catch (error) {
    yield put(fetchUsersError(error));
  }

}
