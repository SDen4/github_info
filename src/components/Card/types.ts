import { UserType } from '../../store/SearchReducer/types';

export interface CardType {
  user: UserType;
  favorites: string[];
  favoriteUserStatus: boolean;
}
