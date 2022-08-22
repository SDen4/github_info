import { put, takeEvery } from 'redux-saga/effects';

import { fetchAllHistory } from '../actions/actions';

import { ISearhHistoryItem } from '../../../model/search/types';

import { GET_LOCAL_HISTORY_SAGA } from '../constants';

function* sagaWorker() {
  try {
    const saved: ISearhHistoryItem[] = yield JSON.parse(
      localStorage.getItem('saves') || '[]',
    );

    yield put(fetchAllHistory(saved));
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error);
  }
}

export function* getLocalHistorySagaWatcher() {
  yield takeEvery(GET_LOCAL_HISTORY_SAGA, sagaWorker);
}
