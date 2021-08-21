import { call, takeEvery } from 'redux-saga/effects';
import { SEARCH_SAGA } from '../constants';
import {} from '../actions';

async function fetchPosts() {
  // const response = await fetch(
  //   'https://jsonplaceholder.typicode.com/posts?_limit=5',
  // );
  // return await response.json();
}

function* sagaWorker() {
  try {
    // yield put(showLoader());
    const payload: string = yield call(fetchPosts);
    // eslint-disable-next-line no-console
    console.log(payload);
    // yield put({ type: FETCH_POSTS, payload });
    // yield put(hideLoader());
  } catch (error) {
    // yield put(showAlert('Something wrong...'));
    // yield put(hideLoader());
  }
}

export function* SearchSagaWatcher() {
  yield takeEvery(SEARCH_SAGA, sagaWorker);
}
