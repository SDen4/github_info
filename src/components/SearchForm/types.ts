import { FavoriteUser } from '../../store/FavoriteReduser/types';
import { InitialStateType } from '../../store/SearchReducer/types';

export interface ISearch {
  searchFunc: any;
  search: InitialStateType;
  favoritesList: FavoriteUser[];
  favoriteListFlag: boolean;
}
