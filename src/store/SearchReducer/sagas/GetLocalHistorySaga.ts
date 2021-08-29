import { takeEvery, put } from 'redux-saga/effects';

import { GET_LOCAL_HISTORY_SAGA } from '../constants';
import { fetchAllHistory } from '../actions';
import { ISearhHistoryItem } from '../types';

function* sagaWorker() {
  try {
    const saved: ISearhHistoryItem[] = yield JSON.parse(
      localStorage.getItem('saves') || '[]',
    );

    console.log(saved);

    yield put(fetchAllHistory(saved));
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error);
  }
}

export function* GetLocalHistorySagaWatcher() {
  yield takeEvery(GET_LOCAL_HISTORY_SAGA, sagaWorker);
}
