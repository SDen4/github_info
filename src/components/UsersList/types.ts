import { UserInnerType } from '../../store/SearchReducer/types';

export interface IUsersList {
  users: UserInnerType[];
  login: string;
  requestType: string;
}
