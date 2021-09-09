// @ts-ignore
import defaultFetch from 'node-fetch';
import { StatusCodes } from 'http-status-codes';
import Recipe from '../types/Recipe';

const { OK } = StatusCodes;

export default async ({
  payload,
  fetch = defaultFetch,
}: {
    payload: Recipe,
    fetch: typeof defaultFetch
}): Promise<Recipe> => {
  const { id } = payload;
  const path = `http://localhost:8000/recipes/${id}`;

  const response = await fetch(path, {
    method: 'PATCH',
    body: JSON.stringify(payload),
    headers: { 'Content-Type': 'application/json' },
  });

  if (response.status !== OK) {
    console.log('Something is not happy!');
  }
  return response.json();
};
