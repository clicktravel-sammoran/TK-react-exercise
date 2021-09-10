import axios from 'axios';

export default async ({
  id,
}: {
    id: number,
}): Promise<number> => axios.delete(`/recipes/${id.toString()}`).then(({ status }) => status);
