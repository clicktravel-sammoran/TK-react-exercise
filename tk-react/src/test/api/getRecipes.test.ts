import getRecipes from '../../api/getRecipes';

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

    const response = {
      status: 200,
      json: jest.fn().mockResolvedValue(mockResponseJson),
    };

    const fetch = jest.fn().mockReturnValue(response);

    const result = await getRecipes({
      fetch,
    });

    expect(result).toStrictEqual(mockResponseJson);
    expect(fetch).toHaveBeenCalledWith(
      'http://localhost:8000/recipes/',
      { method: 'GET' },
    );
  });

  describe('and given a filter query', () => {
    const filterQuery = 'Pizza';

    it('should return recipes that only match that query', async () => {
      const mockResponseJson = [
        {
          name: 'Pizza and Chips',
          description: 'A favourite',
          id: 2,
          ingredients: [{ name: 'Sausage' }],
        },
      ];

      const response = {
        status: 200,
        json: jest.fn().mockResolvedValue(mockResponseJson),
      };

      const fetch = jest.fn().mockReturnValue(response);

      const result = await getRecipes({
        filterQuery,
        fetch,
      });

      expect(result).toStrictEqual(mockResponseJson);
      expect(fetch).toHaveBeenCalledWith(
        'http://localhost:8000/recipes/?name=Pizza',
        { method: 'GET' },
      );
    });
  });
});
