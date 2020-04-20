const mockAxios = require('jest-mock-axios');
const getListCharacters = require('../controllers/characterCtrl');
const { key } = require('../store/auth');
const URL = 'https://www.potterapi.com/v1/';

// afterEach(() => {
//   // cleaning up the mess left behind the previous test
//   mockAxios.reset();
// });

test('should return datas', () => {
  async function testGetCharacters() {
    await getListCharacters();
    expect(mockAxios.get).toHaveBeenCalledWith(`${URL}characters?key=${key}`);
  }
  testGetCharacters();
});