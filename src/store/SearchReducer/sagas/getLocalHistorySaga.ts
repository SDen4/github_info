import { put, takeEvery } from 'redux-saga/effects';

import { fetchSearchList } from '../searchReducer';

import type { ISearhHistoryItem } from 'model/search/types';

import { GET_LOCAL_HISTORY_SAGA } from '../constants';

import { localStorageKeys } from 'constants/searchConstants';

function* sagaWorker() {
  try {
    const saved: ISearhHistoryItem[] = yield JSON.parse(
      localStorage.getItem(localStorageKeys.saves) || '[]',
    );

    yield put(fetchSearchList(saved));
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error);
  }
}

export function* getLocalHistorySagaWatcher() {
  yield takeEvery(GET_LOCAL_HISTORY_SAGA, sagaWorker);
}
