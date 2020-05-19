const mockAxios = require('jest-mock-axios').default;

import { getCharactersSrv, getHousesSrv } from './data';

describe('test axios', () => {
  afterEach(() => {
    mockAxios.reset();
  });

  // test('should call get data function with params page', async () => {
  //   mockAxios.get.mockImplementationOnce(() =>
  //     Promise.resolve({
  //       data: { res: ['name'] },
  //     })
  //   );

  //   const res = await getCharactersSrv();

  //   console.log(res);
  //   expect(mockAxios.get).toHaveBeenCalledTimes(1);
  //   expect(mockAxios.get).toHaveBeenCalledWith(`/api/v1/characters/`, {
  //     params: { page: 1 },
  //   });
  // });

  test('should call get data function', async () => {
    mockAxios.get.mockImplementationOnce(() =>
      Promise.resolve({
        data: { res: ['id'] },
      })
    );

    const res = await getHousesSrv();

    console.log(res);

    expect(mockAxios.get).toHaveBeenCalledWith(`/api/v1/houses/`);
  });
});
