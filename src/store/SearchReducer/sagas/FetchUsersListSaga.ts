import { takeEvery, put } from 'redux-saga/effects';

import { FETCH_USERS_LIST_SAGA } from '../constants';
import {
  cardOPenedFlag,
  fetchUsersList,
  loadingFlag,
  userListOpenedFlag,
} from '../actions';
import { IFetchUsersListSagaWorker, UserType } from '../types';

import { API } from '../../../api/API';

async function getUserInfo(login: string, requestType: string) {
  const response = await API.get(`${login}/${requestType}`).then(
    (res) => res.data,
  );
  // eslint-disable-next-line no-console
  console.log(response);
  return response;
}

function* sagaWorker(action: IFetchUsersListSagaWorker) {
  try {
    yield put(cardOPenedFlag(false));
    yield put(loadingFlag(true));

    const allData: UserType[] = yield getUserInfo(
      action.login,
      action.requestType,
    );
    // eslint-disable-next-line no-console
    console.log(allData);

    yield put(fetchUsersList(allData));

    yield put(loadingFlag(false));
    yield put(userListOpenedFlag(true));
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error);
    yield put(loadingFlag(false));
  }
}

export function* FetchUsersListSagaWatcher() {
  yield takeEvery(FETCH_USERS_LIST_SAGA, sagaWorker);
}
