/* eslint-disable indent */
import { UserType } from '../../../store/SearchReducer/types';
import { dateFormatter } from '../../../utils/dateFormatter';

export const fileText = (user: UserType) => {
  return `
    User information.


    Login: ${user.login}, name: ${user.name || '-'}
    
    Followers quantity: ${user.followersNum}. Following quantity: ${
    user.followingNum
  }

    Location: ${user.location || '?'}

    Company: ${user.company || '?'}

    Email: ${user.email || '?'}

    Date of creation Github account: ${dateFormatter(user.dataCreated) || '?'}

    Date of last activity on Github: ${
      (user.lastActivityDate &&
        dateFormatter(new Date(user.lastActivityDate))) ||
      '?'
    }

    Public repositories quantity: ${user.reposNum || '?'}


    Links.
    

    Followers: ${user.followersUrl}

    Following: ${user.followingUrl}

    Repositories: ${user.reposUrl}

    Avatar: ${user.avatarUrl}
    `;
};
