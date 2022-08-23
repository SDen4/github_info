export interface IFavoriteUser {
  name: string;
  note?: string;
}

export interface IInitialFavoriteState {
  favoriteBtnFlag: boolean;
  favoriteListFlag: boolean;
  favoriteList: IFavoriteUser[];
  favoriteUser: boolean;
  noteFlag: boolean;
  noteBtnFlag: boolean;
  note: string;
}
