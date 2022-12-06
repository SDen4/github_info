import { all, put, select, takeEvery } from 'redux-saga/effects';

import {
  getSearchedUsersList,
  getStart,
  setError,
  setLoading,
  setPage,
} from '../actions/actions';
import { searchedUserSelect } from '../selectors';

import { getListSearchedUsers } from 'api/searchRequest';

import { fetchNote, setNoteBtn } from 'store/FavoriteReduser/favoriteReducer';

import { ISearchedUsersList } from 'model/search/types';

import { PAGINATION_SAGA } from '../constants';
import { defaultSearchUsersList } from 'constants/searchConstants';

interface IProps {
  type: typeof PAGINATION_SAGA;
  page: number;
}

function* sagaWorker(action: IProps) {
  const searchedUser: string = yield select(searchedUserSelect);

  try {
    yield all([
      put(getSearchedUsersList(defaultSearchUsersList)),
      put(getStart()),
      put(fetchNote('')),
      put(setNoteBtn(false)),
    ]);

    yield put(setPage(action.page));

    const allData: ISearchedUsersList = yield getListSearchedUsers(
      searchedUser,
      action.page,
    );

    if (allData) {
      yield put(getSearchedUsersList(allData));
    }
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error);
    yield all([put(setLoading(false)), put(setError(true))]);
  }
}

export function* paginationSagaWatcher() {
  yield takeEvery(PAGINATION_SAGA, sagaWorker);
}
