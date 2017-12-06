import { Action } from 'redux-act';
/**
 * Watch request to fetch group trends data for grid
 */
import { all, call, put, takeLatest } from 'redux-saga/effects';
import { RequestParams } from '../../shared/utils';
import { UserService } from '../services/user.service';
import {
  fetchUserDetailsError,
  fetchUserDetailsSuccess,
  fetchUsers,
  fetchUsersError,
  fetchUsersSuccess,
  selectUser
} from './user.actions';

const getErrorText = (error: any) => {
  return error && error.response && error.response.statusText || 'Unknown Error';
};

export function* userSaga() {
  yield all([
    fetchUsersSaga(),
    fetchUserDetailsSaga(),
  ]);
}

function* fetchUsersSaga() {
  yield takeLatest(fetchUsers, fetchUsersWorker);
}

function* fetchUserDetailsSaga() {
  yield takeLatest(selectUser, fetchUserDetailsWorker);
}

function* fetchUsersWorker(action: Action<RequestParams>) {
  try {
    const { data } = yield call(UserService.list, action.payload);
    yield put(fetchUsersSuccess(data));
  } catch (error) {
    yield put(fetchUsersError(getErrorText(error)));
  }
}

function* fetchUserDetailsWorker(action: Action<string>) {
  try {
    const { data } = yield call(UserService.get, action.payload);
    yield put(fetchUserDetailsSuccess(data.data));
  } catch (error) {
    yield put(fetchUserDetailsError(getErrorText(error)));
  }
}
