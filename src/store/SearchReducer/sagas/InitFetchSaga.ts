import { takeEvery, put, all } from 'redux-saga/effects';

import { SEARCH_INIT_SAGA } from '../constants';
import { mobileWidth } from '../../../constants/searchConstants';

import { getLocalHistorySaga } from '../actionsSagas';
import {
  errorFlag,
  loadingFlag,
  searchIsAndroid,
  searchIsMobile,
} from '../actions';
import { getFavoriteListSaga } from '../../FavoriteReduser/actions';

function* sagaWorker() {
  try {
    // detect mobiles
    const width: number = yield document.documentElement.clientWidth;
    if (width <= mobileWidth) {
      yield put(searchIsMobile(true));

      // detect mobile platform
      const platform: string = yield navigator.userAgent;
      if (platform.toLocaleLowerCase().includes('android')) {
        yield put(searchIsAndroid(true));
      } else {
        yield put(searchIsAndroid(false));
      }
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
