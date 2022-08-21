import { put, select, takeEvery } from 'redux-saga/effects';

import { API } from '../../../api/API';
import {
  cardOpenedFlag,
  fetchUsersList,
  loadingFlag,
  userListOpenedFlag,
} from '../actions/actions';
import { userSelect } from '../selectors';

import { IFetchUsersListSagaWorker, UserInnerType, UserType } from '../types';

import { FETCH_USERS_LIST_SAGA } from '../constants';

async function getUserInfo(login: string, requestType: string) {
  const response = await API.get(`${login}/${requestType}`).then(
    (res) => res.data,
  );
  return response;
}

function* sagaWorker(action: IFetchUsersListSagaWorker) {
  const user: UserType = yield select(userSelect);

  try {
    yield put(loadingFlag(true));

    const allData: UserInnerType[] = yield getUserInfo(
      user.login,
      action.requestType,
    );

    yield put(fetchUsersList(allData, action.requestType));

    yield put(loadingFlag(false));
    yield put(userListOpenedFlag(true));
    yield put(cardOpenedFlag(false));
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error);
    yield put(loadingFlag(false));
  }
}

export function* FetchUsersListSagaWatcher() {
  yield takeEvery(FETCH_USERS_LIST_SAGA, sagaWorker);
}
