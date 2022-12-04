import { all, put, takeEvery } from 'redux-saga/effects';

import {
  getSearchedUsers,
  getStart,
  setError,
  setLoading,
} from '../actions/actions';

import { getListSearchedUsers } from 'api/searchRequest';
import { caching } from 'utils/caching';

import { fetchNote, setNoteBtn } from 'store/FavoriteReduser/favoriteReducer';

import { ISearchedUsersList } from 'model/search/types';

import { SEARCH_USERS_SAGA } from '../constants';

interface IProps {
  searchStr: string;
}

function* sagaWorker(action: IProps) {
  try {
    yield all([put(getStart()), put(fetchNote('')), put(setNoteBtn(false))]);

    const cacheGetUsers = caching(getListSearchedUsers);

    const allData: ISearchedUsersList = yield cacheGetUsers(action.searchStr);

    if (allData) {
      yield put(getSearchedUsers(allData));
    }
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error);
    yield all([put(setLoading(false)), put(setError(true))]);
  }
}

export function* searchUsersSagaWatcher() {
  // @ts-ignore
  yield takeEvery(SEARCH_USERS_SAGA, sagaWorker);
}
