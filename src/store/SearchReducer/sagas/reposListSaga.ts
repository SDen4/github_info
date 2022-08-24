import { put, select, takeEvery } from 'redux-saga/effects';

import { API } from '../../../api/API';
import {
  fetchReposList,
  setCard,
  setLoading,
  setReposList,
} from '../actions/actions';
import { userSelect } from '../selectors';

import { IRepoItem, IUser } from '../../../model/search/types';

import { REPOS_LIST_SAGA } from '../constants';

async function getReposInfo(login: string) {
  const response = await API.get(`${login}/repos`).then((res) => res.data);
  return response;
}

function* sagaWorker() {
  const user: IUser = yield select(userSelect);

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