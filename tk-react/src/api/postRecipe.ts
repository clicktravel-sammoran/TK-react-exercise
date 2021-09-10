import axios from 'axios';

import Recipe from '../types/Recipe';

export default async ({
  payload,
}: {
    payload: Recipe,
}): Promise<Recipe> => axios.post('/recipes/', payload).then(({ data }) => data);
