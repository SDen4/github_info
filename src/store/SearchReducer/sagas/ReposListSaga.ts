import { takeEvery, put } from 'redux-saga/effects';

import { REPOS_LIST_SAGA } from '../constants';
import {
  cardOpenedFlag,
  fetchReposList,
  loadingFlag,
  reposOpenedListFlag,
} from '../actions';
import { IRepoItem, IReposListSagaWorker } from '../types';

import { API } from '../../../api/API';

async function getReposInfo(login: string) {
  const response = await API.get(`${login}/repos`).then((res) => res.data);
  return response;
}

function* sagaWorker(action: IReposListSagaWorker) {
  try {
    yield put(loadingFlag(true));

    const allRepos: IRepoItem[] = yield getReposInfo(action.login);

    yield put(fetchReposList(allRepos));
    yield put(reposOpenedListFlag(true));
    yield put(cardOpenedFlag(false));
    yield put(loadingFlag(false));
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error);
    yield put(loadingFlag(false));
  }
}

export function* ReposListSagaWatcher() {
  yield takeEvery(REPOS_LIST_SAGA, sagaWorker);
}
