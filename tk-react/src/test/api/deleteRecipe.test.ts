import axios from 'axios';
import NO_CONTENT from 'http-status-codes';
import deleteRecipe from '../../api/deleteRecipe';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('deleteRecipe', () => {
  const id = 1;
  it('should delete a recipe', async () => {
    const mockStatus = NO_CONTENT;

    mockedAxios.delete.mockResolvedValue({ status: mockStatus });

    const result = await deleteRecipe({ id });

    expect(mockedAxios.delete).toHaveBeenCalledWith(`/recipes/${id}`);
    expect(result).toStrictEqual(mockStatus);
  });
});
