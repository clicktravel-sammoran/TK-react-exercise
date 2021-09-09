// @ts-ignore
import defaultFetch from 'node-fetch';
import { StatusCodes } from 'http-status-codes';

const { NO_CONTENT } = StatusCodes;

export default async ({
  id,
  fetch = defaultFetch,
}: {
    id: string,
    fetch: typeof defaultFetch
}): Promise<string> => {
  const path = `http://localhost:8000/recipes/${id}`;

  const response = await fetch(path, { method: 'DELETE' });

  if (response.status !== NO_CONTENT) {
    console.log('Something is not happy!');

    return 'Recipe not deleted, please try again';
  }
  return 'Recipe deleted successfully';
};
