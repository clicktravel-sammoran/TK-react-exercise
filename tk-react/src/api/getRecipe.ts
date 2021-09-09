// @ts-ignore
import defaultFetch from 'node-fetch';
import { StatusCodes } from 'http-status-codes';
import Recipe from '../types/Recipe';

const { OK } = StatusCodes;

export default async ({
  id,
  fetch = defaultFetch,
}: {
    id: string,
    fetch: typeof defaultFetch
}): Promise<Promise<Recipe> | void> => {
  const path = `http://localhost:8000/recipes/${id}`;

  const response = await fetch(path, { method: 'GET' });

  if (response.status !== OK) {
    console.log('Something is not happy!');

    return undefined;
  }
  return response.json();
};
