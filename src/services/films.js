import { getRequest } from './utils'

export const getFilms = async function () {
  return getRequest('https://yts.mx/api/v2/list_movies.json');
}