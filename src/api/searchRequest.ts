import { API } from './API';

import { usersPerPage } from 'constants/searchConstants';

export async function getUsersInfo(login: string, requestType: string) {
  const response = await API.get(`${login}/${requestType}`).then(
    (res) => res.data,
  );
  return response;
}

export async function getReposInfo(login: string, page?: number) {
  const path = page ? `/repos?page=${page}` : '/repos?page=1';

  const response = await API.get(`${login}${path}`).then((res) => res.data);
  return response;
}

export async function getUserInfo(login: string) {
  const response = await API.get(`${login.trim()}`).then((res) => res.data);
  return response;
}

export async function getListSearchedUsers(searchStr: string, page?: number) {
  const pageToRequest = page ? `&page=${page}` : '';
  const response = await API.get(
    `https://api.github.com/search/users?q=${searchStr.trim()}&per_page=${usersPerPage}${pageToRequest}`,
  ).then((res) => res.data);
  return response;
}

export async function getLastActivityDate(login: string) {
  const response = await API.get(`${login.trim()}/events`)
    .then((res) => res.data[0].created_at)
    // eslint-disable-next-line no-console
    .catch((isError) => console.log(isError));
  return response;
}
