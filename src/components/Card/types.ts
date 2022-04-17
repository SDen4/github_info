import { FavoriteUser } from '../../store/FavoriteReduser/types';
import { UserType } from '../../store/SearchReducer/types';

export interface CardType {
  user: UserType;
  favoriteList: FavoriteUser[];
  favoriteUser: boolean;
  noteBtnFlag: boolean;
  note: string;
  noteStoreFlag: boolean;
  loading: boolean;
}
