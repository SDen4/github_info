import { all, put, takeEvery } from 'redux-saga/effects';

import {
  fetchReposList,
  setError,
  setLoading,
  setPageRepos,
} from '../actions/actions';

import { getReposInfo } from 'api/searchRequest';
import { select } from 'utils/select';

import { userSelect } from 'selectors/search';

import type { IRepoItem, IUser } from 'model/search/types';

import { PAGINATION_REPOS_SAGA } from '../constants';

interface IProps {
  type: typeof PAGINATION_REPOS_SAGA;
  payload: number;
}

function* sagaWorker(action: IProps) {
  const user: IUser = yield* select(userSelect);

  try {
    yield put(setLoading(true));

    yield put(setPageRepos(action.payload));

    const allRepos: IRepoItem[] = yield getReposInfo(
      user.login,
      action.payload,
    );

    yield put(fetchReposList(allRepos));
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error);
    yield all([put(setLoading(false)), put(setError(true))]);
  } finally {
    yield put(setLoading(false));
  }
}

export function* paginationReposSagaWatcher() {
  yield takeEvery(PAGINATION_REPOS_SAGA, sagaWorker);
}
