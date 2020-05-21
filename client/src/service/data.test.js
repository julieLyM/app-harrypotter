import mockAxios from 'jest-mock-axios';

import { getCharactersSrv, getHousesSrv, getHouseById,getSpellsSrv } from './data';

describe('test axios', () => {
  afterEach(() => {
    mockAxios.reset();
  });

  test('should return the correct response', async () => {
    mockAxios.get.mockReturnValue({
      data: {
        name: 'Harry Potter',
      },
    });
    const result = await getCharactersSrv(1);

    expect(result).toEqual({ name: 'Harry Potter' });
  });


  test('should use the parameter', () => {
    const result = getCharactersSrv(1);

    expect(mockAxios.get).toHaveBeenCalledWith(`/api/v1/characters/`,{params: {page: 1} });
  });


  test('should use the good verb', () => {
    const result = getCharactersSrv(1);

    expect(mockAxios.get).toHaveBeenCalled();
  });

  test('should call get data function', async () => {
    mockAxios.get.mockImplementationOnce(() =>
      Promise.resolve({
        data: { res: ['id'] },
      })
    );
    const res = await getHousesSrv();
    expect(mockAxios.get).toHaveBeenCalledWith(`/api/v1/houses/`);
  });


  test('should return the correct id houses', async () => {
    mockAxios.get.mockReturnValue({
      data: {
        id: 1,
      },
    });
    const result = await getHouseById(1);

    expect(result).toEqual({id: 1 });
  });


  test('should use the parameter fetch spell', () => {
    const result = getSpellsSrv(1);

    expect(mockAxios.get).toHaveBeenCalledWith(`/api/v1/spells/`,{params: {page: 1} });
  });


});
