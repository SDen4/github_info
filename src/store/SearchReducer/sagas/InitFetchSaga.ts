import { takeEvery, put, all } from 'redux-saga/effects';

import { SEARCH_INIT_SAGA } from '../constants';

import { getLocalHistorySaga } from '../actionsSagas';
import { errorFlag, loadingFlag, searchIsMobile } from '../actions';
import { getFavoriteListSaga } from '../../FavoriteReduser/actions';

function* sagaWorker() {
  try {
    // detect mobiles
    const width: number = yield document.documentElement.clientWidth;
    if (width <= 480) {
      yield put(searchIsMobile(true));
    } else {
      yield put(searchIsMobile(false));
    }

    // get elements from localstorage
    yield put(getLocalHistorySaga());
    yield put(getFavoriteListSaga());
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error);
    yield all([put(loadingFlag(false)), put(errorFlag(true))]);
  }
}

export function* InitFetchSagaWatcher() {
  yield takeEvery(SEARCH_INIT_SAGA, sagaWorker);
}
