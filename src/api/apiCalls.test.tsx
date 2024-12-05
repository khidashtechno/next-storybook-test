import { getResponse } from './apiCalls';

global.fetch = jest.fn(() =>
    Promise.resolve({
        json: () => Promise.resolve([{ userId: 1, id: 1, title: 'Test Post', body: 'Test Body' }]),
    })
) as jest.Mock;

describe('getResponse', () => {
    it('should fetch and return data', async () => {
        const data = await getResponse();
        expect(data).toEqual([{ userId: 1, id: 1, title: 'Test Post', body: 'Test Body' }]);
    });

    it('should log an error if fetch fails', async () => {
        console.log = jest.fn();
        global.fetch = jest.fn(() => Promise.reject('API is down'));

        await getResponse();
        expect(console.log).toHaveBeenCalledWith('Error', 'API is down');
    });
});