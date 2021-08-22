import { put, takeEvery } from 'redux-saga/effects';

import { SEARCH_LOGIN_SAGA } from '../constants';
import { fetchLogin } from '../actions';
import { SearchSagaWorkerType } from '../types';
import { API } from '../../../api/API';

async function getUserInfo(login: string) {
  const response = await API.get(`${login}`).then((res) => res.data);
  // eslint-disable-next-line no-console
  console.log(response);
  return response;
}

function* sagaWorker(action: SearchSagaWorkerType) {
  try {
    yield put(fetchLogin(action.login));

    yield getUserInfo(action.login);

    // yield put(showLoader());
    // const payload: string = yield call(fetchPosts);
    // console.log(payload);

    // eslint-disable-next-line no-console
    // yield put({ type: FETCH_POSTS, payload });
    // yield put(hideLoader());
  } catch (error) {
    // yield put(showAlert('Something wrong...'));
    // yield put(hideLoader());
  }
}

export function* SearchSagaWatcher() {
  yield takeEvery(SEARCH_LOGIN_SAGA, sagaWorker);
}
