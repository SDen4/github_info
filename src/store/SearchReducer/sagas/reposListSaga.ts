import { put, takeEvery } from 'redux-saga/effects';

import {
  fetchReposList,
  setCard,
  setLoading,
  setReposList,
} from '../actions/actions';
import { userSelect } from '../selectors';

import { getReposInfo } from 'api/searchRequest';
import { select } from 'utils/select';

import { IRepoItem } from 'model/search/types';

import { REPOS_LIST_SAGA } from '../constants';

function* sagaWorker() {
  const user = yield* select(userSelect);

  try {
    yield put(setLoading(true));

    const allRepos: IRepoItem[] = yield getReposInfo(user.login);

    yield put(fetchReposList(allRepos));
    yield put(setReposList(true));
    yield put(setCard(false));
    yield put(setLoading(false));
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error);
    yield put(setLoading(false));
  }
}

export function* reposListSagaWatcher() {
  yield takeEvery(REPOS_LIST_SAGA, sagaWorker);
}
