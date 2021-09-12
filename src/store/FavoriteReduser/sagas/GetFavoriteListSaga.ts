import { takeEvery, put } from 'redux-saga/effects';

import { fetchFavoriteList } from '../actions';

import { FAVORITE_LIST_SAGA } from '../constants';

import { FavoriteUser } from '../types';

function* sagaWorker() {
  try {
    const saved: FavoriteUser[] = yield JSON.parse(
      localStorage.getItem('favorite') || '[]',
    );

    yield put(fetchFavoriteList(saved));
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error);
  }
}

export function* GetFavoriteListSagaWatcher() {
  yield takeEvery(FAVORITE_LIST_SAGA, sagaWorker);
}
