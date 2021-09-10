import axios from 'axios';
import Recipe from '../types/Recipe';

export default async ({
  id,
  payload,
}: {
    id: number,
    payload: Recipe,
}): Promise<Recipe> => axios.patch(`/recipes/${id.toString()}`, payload).then(({ data }) => data);
