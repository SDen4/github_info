import { FavoriteUser } from '../../store/FavoriteReduser/types';
import { ISearhHistoryItem } from '../../store/SearchReducer/types';

export interface IFavoriteList {
  favoriteList: FavoriteUser[];
  searchList: ISearhHistoryItem[];
  currentUserLogin: string;
  userListOpened: boolean;
  reposListOpened: boolean;
}
