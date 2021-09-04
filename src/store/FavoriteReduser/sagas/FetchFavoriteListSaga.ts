import { takeEvery, put } from 'redux-saga/effects';

import { fetchFavoriteList } from '../actions';

import { FAVORITE_LIST_SAGA } from '../constants';

function* sagaWorker() {
  try {
    const saved: string[] = yield JSON.parse(
      localStorage.getItem('favorites') || '[]',
    );

    yield put(fetchFavoriteList(saved));
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error);
  }
}

export function* FetchFavoriteListSagaWatcher() {
  yield takeEvery(FAVORITE_LIST_SAGA, sagaWorker);
}
