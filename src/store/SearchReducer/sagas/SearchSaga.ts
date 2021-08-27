import { takeEvery, put } from 'redux-saga/effects';

import { SEARCH_LOGIN_SAGA } from '../constants';
import { cardOPenedFlag, errorFlag, fetchLogin, loadingFlag } from '../actions';
import { SearchSagaWorkerType, UserInnerType } from '../types';

import { API } from '../../../api/API';

async function getUserInfo(login: string) {
  const response = await API.get(`${login}`).then((res) => res.data);
  return response;
}

function* sagaWorker(action: SearchSagaWorkerType) {
  try {
    yield put(errorFlag(false));
    yield put(cardOPenedFlag(false));
    yield put(loadingFlag(true));

    const allData: UserInnerType = yield getUserInfo(action.login);
    // eslint-disable-next-line no-console
    console.log(allData);

    yield put(
      fetchLogin(
        allData.name,
        allData.login,
        allData.followers_url,
        allData.following_url,
        allData.followers,
        allData.following,
        new Date(allData.created_at),
        allData.avatar_url,
        allData.company,
        allData.email,
      ),
    );

    yield put(loadingFlag(false));
    yield put(cardOPenedFlag(true));
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error);
    yield put(loadingFlag(false));
    yield put(errorFlag(true));
  }
}

export function* SearchSagaWatcher() {
  yield takeEvery(SEARCH_LOGIN_SAGA, sagaWorker);
}
