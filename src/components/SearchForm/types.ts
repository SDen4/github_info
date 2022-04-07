import { FavoriteUser } from '../../store/FavoriteReduser/types';
import {
  InitialStateType,
  ISearhHistoryItem,
} from '../../store/SearchReducer/types';

export interface ISearch {
  search: any;
  searchState: InitialStateType;
  history: ISearhHistoryItem[];
  favoritesList: FavoriteUser[];
  currentUser: string;
  isMobile: boolean;
}
