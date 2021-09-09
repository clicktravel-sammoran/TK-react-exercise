import { StatusCodes } from 'http-status-codes';
import updateRecipe from '../../api/updateRecipe';

const { OK } = StatusCodes;

describe('updateRecipe', () => {
  it('should PATCH a recipe JSON returning the updated recipe', async () => {
    const payload = {
      name: 'Burgers and chips',
      id: 1,
      description: 'What a meal',
      ingredients: [
        { name: 'Burger' },
        { name: 'bun' },
        { name: 'potatoes' },
      ],
    };

    const response = {
      status: OK,
      json: jest.fn().mockResolvedValue(payload),
    };

    const fetch = jest.fn().mockResolvedValue(response);

    const result = await updateRecipe({ payload, fetch });

    expect(result).toStrictEqual(payload);
  });
});
