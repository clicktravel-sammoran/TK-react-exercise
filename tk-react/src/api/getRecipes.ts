// @ts-ignore
import defaultFetch from 'node-fetch';
import { StatusCodes } from 'http-status-codes';

import Recipe from '../types/Recipe';

const { OK } = StatusCodes;

export default async ({
  filterQuery,
  fetch = defaultFetch,
}: {
    filterQuery?: string,
    fetch: typeof defaultFetch
}): Promise<ReadonlyArray<Promise<Recipe>> | void> => {
  const path = filterQuery
    ? `http://localhost:8000/recipes/?name=${filterQuery}`
    : 'http://localhost:8000/recipes/';

  const response = await fetch(path, {
    method: 'GET',
  });

  if (response.status !== OK) {
    console.log('Something is not happy!');

    return undefined;
  }
  return response.json();
};
