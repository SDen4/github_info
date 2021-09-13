/* eslint-disable indent */
import { UserType } from '../../../store/SearchReducer/types';
import { dateFormatter } from '../../../utils/dateFormatter';
import { periodCounter } from '../../../utils/periodCounter';

export const fileText = (user: UserType, note: string) => {
  const noneVar = '-';

  return `
    User information report for ${dateFormatter(new Date())}.


    Login: ${user.login}, name: ${user.name || noneVar}
    
    Followers quantity: ${user.followersNum}. Following quantity: ${
    user.followingNum
  }

    Location: ${user.location || noneVar}

    Company: ${user.company || noneVar}

    Email: ${user.email || noneVar}

    Date of creation Github account: ${
      dateFormatter(user.dataCreated) || noneVar
    }
    (${periodCounter(user.dataCreated)})

    Date of last activity on Github: ${
      (user.lastActivityDate &&
        dateFormatter(new Date(user.lastActivityDate))) ||
      noneVar
    }

    Public repositories quantity: ${user.reposNum || noneVar}


    Links.
    
    User page: https://github.com/${user.login}

    Repositories: ${user.reposUrl}

    Avatar: ${user.avatarUrl}

    Followers: ${user.followersUrl}

    Following: ${user.followingUrl}

    
    Your notes:

    "${note}"
    `;
};
