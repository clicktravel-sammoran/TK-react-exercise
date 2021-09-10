import axios from 'axios';
import getRecipes from '../../api/getRecipes';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('getRecipes', () => {
  it('should get an array of recipes', async () => {
    const mockResponseJson = [
      {
        name: 'Bangers And Mash',
        description: 'Whack it all together',
        id: 1,
        ingredients: [{ name: 'Sausage' }],
      },
      {
        name: 'Pizza and Chips',
        description: 'A favourite',
        id: 2,
        ingredients: [{ name: 'Sausage' }],
      },
    ];

    mockedAxios.get.mockResolvedValue({ data: mockResponseJson });

    const result = await getRecipes({});

    expect(mockedAxios.get).toHaveBeenCalledWith('/recipes/', { params: { name: undefined } });
    expect(result).toStrictEqual(mockResponseJson);
  });

  describe('given a filter query', () => {
    const filterQuery = 'Pizza';
    it('should make a get request with the filter query as a param', async () => {
      const mockResponseJson = [
        {
          name: 'Pizza and Chips',
          description: 'A favourite',
          id: 2,
          ingredients: [{ name: 'Sausage' }],
        },
      ];

      mockedAxios.get.mockResolvedValue({ data: mockResponseJson });

      const result = await getRecipes({ filterQuery });

      expect(mockedAxios.get).toHaveBeenCalledWith('/recipes/', { params: { name: 'Pizza' } });
      expect(result).toStrictEqual(mockResponseJson);
    });
  });
});
