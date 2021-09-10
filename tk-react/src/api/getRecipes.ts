import axios from 'axios';
import Recipe from '../types/Recipe';

export default async ({
  filterQuery,
}: {
    filterQuery?: string,
}): Promise<Recipe[]> =>
  axios.get('/recipes/', { params: { name: filterQuery } })
    .then(({ data }) => data)
  // Ideally actually do something with the error
    .catch((error) => console.error(error));
