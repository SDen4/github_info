import { put, select, takeEvery } from 'redux-saga/effects';

import { API } from '../../../api/API';
import {
  cardOpenedFlag,
  fetchReposList,
  loadingFlag,
  reposOpenedListFlag,
} from '../actions/actions';
import { userSelect } from '../selectors';

import { IRepoItem, UserType } from '../../../model/search/types';

import { REPOS_LIST_SAGA } from '../constants';

async function getReposInfo(login: string) {
  const response = await API.get(`${login}/repos`).then((res) => res.data);
  return response;
}

function* sagaWorker() {
  const user: UserType = yield select(userSelect);

  try {
    yield put(loadingFlag(true));

    const allRepos: IRepoItem[] = yield getReposInfo(user.login);

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
