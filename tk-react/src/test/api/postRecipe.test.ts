import postRecipe from '../../api/postRecipe';

describe('postRecipe', () => {
  it('should POST a recipe JSON returning the recipe with an id', async () => {
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
    const response = {
      status: 201,
      json: jest.fn().mockResolvedValue({ id: mockResultId, ...payload }),
    };

    const fetch = jest.fn().mockResolvedValue(response);

    const result = await postRecipe({ payload, fetch });

    expect(result.name).toStrictEqual(payload.name);
    expect(result.id).toStrictEqual(mockResultId);
  });
});
