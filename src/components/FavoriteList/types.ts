import { ISearhHistoryItem } from '../../store/SearchReducer/types';

export interface IFavoriteList {
  favoriteList: string[];
  searchList: ISearhHistoryItem[];
  currentUserLogin: string;
  userListOpened: boolean;
  reposListOpened: boolean;
}
