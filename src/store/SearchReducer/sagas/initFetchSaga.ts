import { all, put, takeEvery } from 'redux-saga/effects';

import {
  setAndroid,
  setError,
  setLoading,
  setMobile,
} from '../actions/actions';
import { getLocalHistorySaga } from '../actions/actionsSagas';

import { getFavoriteListSaga } from 'store/FavoriteReduser/actions/actions';

import { SEARCH_INIT_SAGA } from '../constants';
import { mobileWidth } from 'constants/searchConstants';

function* sagaWorker() {
  try {
    // detect mobiles
    const width: number = yield document.documentElement.clientWidth;
    if (width <= mobileWidth) {
      yield put(setMobile(true));

      // detect mobile platform
      const platform: string = yield navigator.userAgent;
      if (platform.toLocaleLowerCase().includes('android')) {
        yield put(setAndroid(true));
      } else {
        yield put(setAndroid(false));
      }
    } else {
      yield put(setMobile(false));
    }

    // get elements from localstorage
    yield put(getLocalHistorySaga());
    yield put(getFavoriteListSaga());
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error);
    yield all([put(setLoading(false)), put(setError(true))]);
  }
}

export function* initFetchSagaWatcher() {
  yield takeEvery(SEARCH_INIT_SAGA, sagaWorker);
}
