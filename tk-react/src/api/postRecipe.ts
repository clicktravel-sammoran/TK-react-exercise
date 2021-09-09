// @ts-ignore
import defaultFetch from 'node-fetch';
import { StatusCodes } from 'http-status-codes';
import Recipe from '../types/Recipe';

const { CREATED } = StatusCodes;

export default async ({
  payload,
  fetch = defaultFetch,
}: {
    payload: Recipe,
    fetch: typeof defaultFetch
}): Promise<Recipe> => {
  const path = 'http://localhost:8000/recipes/';

  const response = await fetch(path, {
    method: 'POST',
    body: JSON.stringify(payload),
    headers: { 'Content-Type': 'application/json' },
  });

  if (response.status !== CREATED) {
    console.log('Something is not happy!');
  }
  return response.json();
};
