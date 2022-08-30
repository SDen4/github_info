import { API } from './API';

export async function getUsersInfo(login: string, requestType: string) {
  const response = await API.get(`${login}/${requestType}`).then(
    (res) => res.data,
  );
  return response;
}

export async function getReposInfo(login: string) {
  const response = await API.get(`${login}/repos`).then((res) => res.data);
  return response;
}

export async function getUserInfo(login: string) {
  const response = await API.get(`${login.trim()}`).then((res) => res.data);
  return response;
}

export async function getLastActivityDate(login: string) {
  const response = await API.get(`${login.trim()}/events`)
    .then((res) => res.data[0].created_at)
    // eslint-disable-next-line no-console
    .catch((isError) => console.log(isError));
  return response;
}
