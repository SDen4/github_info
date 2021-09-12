import { FavoriteUser } from '../../store/FavoriteReduser/types';

export interface INote {
  login: string;
  favorites: FavoriteUser[];
  note: string;
}
