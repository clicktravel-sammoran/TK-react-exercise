import getRecipe from '../../api/getRecipe';

describe('getRecipe', () => {
  describe('given an Id', () => {
    const id = '1';

    it('should get a recipe', async () => {
      const mockResponseJson = {
        name: 'Bangers And Mash',
        description: 'Whack it all together',
        id,
        ingredients: [{ name: 'Sausage' }],
      };

      const response = {
        status: 200,
        json: jest.fn().mockResolvedValue(mockResponseJson),
      };

      const fetch = jest.fn().mockReturnValue(response);

      const result = await getRecipe({
        id,
        fetch,
      });

      expect(result).toStrictEqual(mockResponseJson);
    });
  });
});
