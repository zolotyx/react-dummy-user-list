import { Action } from 'redux-act';
/**
 * Watch request to fetch group trends data for grid
 */
import { all, put, takeLatest } from 'redux-saga/effects';
import { RequestParams } from '../../utils';
import { fetchUsers, fetchUsersSuccess } from './user.actions';

export function* userSaga() {
  yield all([
    fetchUsersSaga(),
  ]);
}


function* fetchUsersSaga() {
  yield takeLatest(fetchUsers, fetchUsersWorker);
}

function* fetchUsersWorker(data: Action<RequestParams>) {
  yield put(fetchUsersSuccess([
    {
      id: '1',
      first_name: 'test',
      last_name: 'ololosh',
      avatar: 'test'
    }
  ]));
}
