import { fork, all } from 'redux-saga/effects';
import { SearchSagaWatcher } from './SearchReducer/sagas/SearchSaga';

export default function* rootSaga() {
  yield all([fork(SearchSagaWatcher)]);
}
