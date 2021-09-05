import { ISearhHistoryItem } from '../../store/SearchReducer/types';

export interface ISearchHistoryList {
  searchList: ISearhHistoryItem[];
  currentUserLogin: string;
  favoritesList: string[];
}
