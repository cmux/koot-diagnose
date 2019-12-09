// jest configuration
jest.setTimeout(10 * 60 * 1 * 1000);

//

const psi = require('../psi');

//

describe('koot-diagnose', () => {
    test('psi', async () => {
        let err, result;

        try {
            result = await psi('https://cmcm.com');
        } catch (e) {
            console.error(e);
            err = e;
        }

        expect(typeof err).toBe('undefined');
        expect(typeof result).toBe('object');
    });
});
