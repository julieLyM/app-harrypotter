import axios from 'axios';
import { getCharactersSrv, getHousesSrv } from './data';

describe('test axios name characters', () => {
  afterEach(() => {
    axios.reset();
  });
  test('should call get data function', async () => {
    axios.get.mockImplementationOnce(() =>
      Promise.resolve({
        data: { res: ['name'] },
      })
    );

    const res = await getCharactersSrv();

    console.log(res);

    expect(axios.get).toHaveBeenCalledWith(`/api/v1/characters/`);
  });
});

describe('test axios houses', () => {
  afterEach(() => {
    axios.reset();
  });
  test('should call get data function', async () => {
    axios.get.mockImplementationOnce(() =>
      Promise.resolve({
        data: { res: ['id'] },
      })
    );

    const res = await getHousesSrv();

    console.log(res);

    expect(axios.get).toHaveBeenCalledWith(
      `/api/v1/houses/`
    );
  });
});