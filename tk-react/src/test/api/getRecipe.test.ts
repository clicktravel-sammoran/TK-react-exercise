import axios from 'axios';
import getRecipe from '../../api/getRecipe';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('getRecipe', () => {
  const id = 1;
  it('should get an array of recipes', async () => {
    const mockResponseJson = {
      name: 'Bangers And Mash',
      description: 'Whack it all together',
      id,
      ingredients: [{ name: 'Sausage' }],
    };

    mockedAxios.get.mockResolvedValue({ data: mockResponseJson });

    const result = await getRecipe({ id });

    expect(mockedAxios.get).toHaveBeenCalledWith(`/recipes/${id}`);
    expect(result).toStrictEqual(mockResponseJson);
  });
});
