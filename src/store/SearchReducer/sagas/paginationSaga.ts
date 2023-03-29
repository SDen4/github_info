import { all, put, takeEvery } from 'redux-saga/effects';

import {
  getSearchedUsersList,
  getStart,
  setError,
  setLoading,
  setPage,
} from '../actions/actions';

import { getListSearchedUsers } from 'api/searchRequest';
import { select } from 'utils/select';

import { searchedUserSelect } from 'selectors/search';

import { fetchNote, setNoteBtn } from 'store/FavoriteReduser/favoriteReducer';

import { ISearchedUsersList } from 'model/search/types';

import { PAGINATION_SAGA } from '../constants';
import { defaultSearchUsersList } from 'constants/searchConstants';

interface IProps {
  type: typeof PAGINATION_SAGA;
  payload: number;
}

function* sagaWorker(action: IProps) {
  const searchedUser: string = yield* select(searchedUserSelect);

  try {
    yield all([
      put(getSearchedUsersList(defaultSearchUsersList)),
      put(getStart()),
      put(fetchNote('')),
      put(setNoteBtn(false)),
    ]);

    yield put(setPage(action.payload));

    const allData: ISearchedUsersList = yield getListSearchedUsers(
      searchedUser,
      action.payload,
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
