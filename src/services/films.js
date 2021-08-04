import { getRequest } from './utils';

// eslint-disable-next-line import/prefer-default-export
export const getFilms = async function () {
  return getRequest('https://yts.mx/api/v2/list_movies.json');
};
