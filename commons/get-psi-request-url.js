const getUrl = require('./get-url-object');

module.exports = (_url, apiKey, parameters = {}) => {
    const url = getUrl(_url);
    const query = {
        url: url.origin,
        key: apiKey,
        ...parameters
    };

    return (
        `https://www.googleapis.com/pagespeedonline/v5/runPagespeed` +
        '?' +
        Object.entries(query)
            .filter(
                ([_, value]) =>
                    (typeof value === 'string' && !!value) ||
                    Array.isArray(value)
            )
            .map(([key, value]) => {
                if (Array.isArray(value)) {
                    return value.map(v => `${key}=${v}`).join('&');
                }
                return `${key}=${value}`;
            })
            .join('&')
    );
};
