import { all, put, takeEvery } from 'redux-saga/effects';

import { getFavoriteListSaga } from '../../FavoriteReduser/actions/actions';
import {
  errorFlag,
  loadingFlag,
  searchIsAndroid,
  searchIsMobile,
} from '../actions/actions';
import { getLocalHistorySaga } from '../actions/actionsSagas';

import { mobileWidth } from '../../../constants/searchConstants';
import { SEARCH_INIT_SAGA } from '../constants';

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
