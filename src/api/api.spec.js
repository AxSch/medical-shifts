import fetchShiftsAPI from './api';

describe('fetchShiftsAPI', () => {
    it('should call the endpoint & successfully retrieve the results', () => {
        expect.assertions(2)
        return fetchShiftsAPI().then(res => {
            expect(res.data.length).toEqual(19)
            expect(res.statusCode).toEqual(200)
        })
    }, 3000);
});
