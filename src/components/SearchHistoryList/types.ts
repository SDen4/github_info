import { FavoriteUser } from '../../store/FavoriteReduser/types';
import { ISearhHistoryItem } from '../../store/SearchReducer/types';

export interface ISearchHistoryList {
  searchList: ISearhHistoryItem[];
  currentUserLogin: string;
  favoritesList: FavoriteUser[];
  userListOpened: boolean;
  reposListOpened: boolean;
}
