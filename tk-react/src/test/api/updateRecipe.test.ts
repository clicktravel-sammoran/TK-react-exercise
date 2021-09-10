import axios from 'axios';
import updateRecipe from '../../api/updateRecipe';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('updateRecipe', () => {
  it('should PATCH a recipe JSON returning the updated recipe', async () => {
    const id = 1;
    const payload = {
      name: 'Burgers and chips',
      id,
      description: 'What a meal',
      ingredients: [
        { name: 'Burger' },
        { name: 'bun' },
        { name: 'potatoes' },
      ],
    };

    mockedAxios.patch.mockResolvedValue({ data: payload });

    const result = await updateRecipe({ id, payload });

    expect(mockedAxios.patch).toHaveBeenCalledWith(`/recipes/${id}`, { ...payload });
    expect(result.name).toStrictEqual(payload.name);
  });
});
