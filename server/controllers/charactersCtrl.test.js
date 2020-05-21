const mockAxios = require('jest-mock-axios').default;
const getListCharacters = require('../controllers/characterCtrl');
const { AUTH_KEY } = require('../store/AUTHS');
const URL = 'https://www.potterapi.com/v1/';

describe('test axios name characters', () => {
  afterEach(() => {
    mockAxios.reset();
  });

  test('should return datas', () => {
    async function testGetCharacters() {
      await getListCharacters();
      expect(mockAxios.get).toHaveBeenCalledWith(
        `${URL}characters?key=${AUTH_KEY}`
      );
    }
    testGetCharacters();
  });
});
