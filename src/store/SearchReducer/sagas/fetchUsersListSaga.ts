import { put, select, takeEvery } from 'redux-saga/effects';

import { API } from '../../../api/API';
import {
  fetchUsersList,
  setCard,
  setLoading,
  setUsersList,
} from '../actions/actions';
import { userSelect } from '../selectors';

import {
  IFetchUsersListSaga,
  IUser,
  IUserInner,
} from '../../../model/search/types';

import { FETCH_USERS_LIST_SAGA } from '../constants';

async function getUserInfo(login: string, requestType: string) {
  const response = await API.get(`${login}/${requestType}`).then(
    (res) => res.data,
  );
  return response;
}

function* sagaWorker(action: IFetchUsersListSaga) {
  const user: IUser = yield select(userSelect);

  try {
    yield put(setLoading(true));

    const allData: IUserInner[] = yield getUserInfo(
      user.login,
      action.requestType,
    );

    yield put(fetchUsersList(allData, action.requestType));

    yield put(setLoading(false));
    yield put(setUsersList(true));
    yield put(setCard(false));
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error);
    yield put(setLoading(false));
  }
}

export function* fetchUsersListSagaWatcher() {
  yield takeEvery(FETCH_USERS_LIST_SAGA, sagaWorker);
}