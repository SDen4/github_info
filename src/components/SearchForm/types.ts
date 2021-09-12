import { FavoriteUser } from '../../store/FavoriteReduser/types';
import { ISearhHistoryItem } from '../../store/SearchReducer/types';

export interface ISearch {
  search: any;
  history: ISearhHistoryItem[];
  favoritesList: FavoriteUser[];
  currentUser: string;
}
