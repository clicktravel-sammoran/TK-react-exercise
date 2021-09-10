import axios from 'axios';
import Recipe from '../types/Recipe';

export default async ({
  id,
}: {
    id: number,
}): Promise<Promise<Recipe> | void> =>
  axios.get(`/recipes/${id.toString()}`)
    .then((response) => response.data)
  // Ideally actually do something with the error
    .catch((error) => console.error(error));
