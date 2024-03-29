import { all, put, takeEvery } from 'redux-saga/effects';

import {
  getSearchedUser,
  getSearchedUsersList,
  getStart,
  setError,
  setLoading,
  setPage,
  setSearchList,
} from '../searchReducer';

import { getListSearchedUsers } from 'api/searchRequest';
import { caching } from 'utils/caching';
import { select } from 'utils/select';

import { isFavoriteListSelect } from 'selectors/favorite';
import { isMobileSelect, isSearchListSelect } from 'selectors/search';

import {
  fetchNote,
  setFavoriteList,
  setNoteBtn,
} from 'store/FavoriteReduser/favoriteReducer';

import type { ISearchedUsersList } from 'model/search/types';

import { SEARCH_USERS_SAGA } from '../constants';
import { defaultSearchUsersList } from 'constants/searchConstants';

interface IProps {
  type: typeof SEARCH_USERS_SAGA;
  searchStr: string;
}

function* sagaWorker(action: IProps) {
  if (!action.searchStr) return;

  const isMobile = yield* select(isMobileSelect);
  const isFavoriteList = yield* select(isFavoriteListSelect);
  const isSearchList = yield* select(isSearchListSelect);

  try {
    yield put(getSearchedUser(action.searchStr));
    yield put(setPage(1));

    if (isMobile && isSearchList) yield put(setSearchList(false));
    if (isMobile && isFavoriteList) yield put(setFavoriteList(false));

    yield all([
      put(getSearchedUsersList(defaultSearchUsersList)),
      put(getStart()),
      put(fetchNote('')),
      put(setNoteBtn(false)),
    ]);

    const cacheGetUsers = caching(getListSearchedUsers);

    const allData: ISearchedUsersList = yield cacheGetUsers(action.searchStr);

    if (allData) {
      yield put(getSearchedUsersList(allData));
    }
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error);
    yield all([put(setLoading(false)), put(setError(true))]);
  }
}

export function* searchUsersSagaWatcher() {
  yield takeEvery(SEARCH_USERS_SAGA, sagaWorker);
}
