import { StatusCodes } from 'http-status-codes';
import deleteRecipe from '../../api/deleteRecipe';

const { NO_CONTENT } = StatusCodes;

describe('deleteRecipe', () => {
  describe('given an Id', () => {
    const id = '28';

    it('should get a recipe', async () => {
      const response = {
        status: NO_CONTENT,
      };

      const fetch = jest.fn().mockReturnValue(response);

      const result = await deleteRecipe({
        id,
        fetch,
      });

      expect(result).toStrictEqual('Recipe deleted successfully');
    });
  });
});
