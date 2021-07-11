import { getRequest } from './utils';

// eslint-disable-next-line import/prefer-default-export
export const getFilm = async function (id) {
  return getRequest(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`);
};
