import axios from 'axios';
import postRecipe from '../../api/postRecipe';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('postRecipe', () => {
  it('should post a recipe, returning the recipe with an id', async () => {
    const payload = {
      name: 'Burgers and chips',
      description: 'What a meal',
      ingredients: [
        { name: 'Burger' },
        { name: 'bun' },
        { name: 'potatoes' },
      ],
    };
    const mockResultId = 1;
    mockedAxios.post.mockResolvedValue({ data: { id: mockResultId, ...payload } });

    const result = await postRecipe({ payload });

    expect(mockedAxios.post).toHaveBeenCalledWith('/recipes/', { ...payload });
    expect(result.name).toStrictEqual(payload.name);
    expect(result.id).toStrictEqual(mockResultId);
  });
});
