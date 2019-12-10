// jest configuration
jest.setTimeout(10 * 60 * 1 * 1000);

//

const psi = require('../psi');
const getReqUrl = require('../commons/get-psi-request-url');

//

describe('koot-diagnose', () => {
    test('PageSpeed Insights API', async () => {
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

    test('有多个 category 时，拼成的 URL', () => {
        expect(getReqUrl('https://domain.com')).toBe(
            `https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=https://domain.com`
        );
        expect(getReqUrl('https://domain.com', 'abc')).toBe(
            `https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=https://domain.com&key=abc`
        );
        expect(
            getReqUrl('https://domain.com', 'abc', {
                category: 'seo'
            })
        ).toBe(
            `https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=https://domain.com&key=abc&category=seo`
        );
        expect(
            getReqUrl('https://domain.com', undefined, {
                category: 'seo'
            })
        ).toBe(
            `https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=https://domain.com&category=seo`
        );
        expect(
            getReqUrl('https://domain.com', 'abc', {
                category: ['seo', 'pwa']
            })
        ).toBe(
            `https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=https://domain.com&key=abc&category=seo&category=pwa`
        );
        expect(
            getReqUrl('https://domain.com', undefined, {
                category: ['seo', 'pwa']
            })
        ).toBe(
            `https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=https://domain.com&category=seo&category=pwa`
        );
    });
});
