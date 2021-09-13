import { FavoriteUser } from '../../store/FavoriteReduser/types';
import { UserType } from '../../store/SearchReducer/types';

export interface CardType {
  user: UserType;
  favorites: FavoriteUser[];
  favoriteUserStatus: boolean;
  noteUserStatus: boolean;
  note: string;
}
