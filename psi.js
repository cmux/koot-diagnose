const fetch = require('node-fetch');
const getUrl = require('./commons/get-url-object');

/**
 * 对目标域名的首页进行 PageSpeed Insights 检测
 * @async
 * @param {string|Url} url
 * @param {string} [apiKey]
 * @param {Object} [parameters] https://developers.google.com/speed/docs/insights/v5/reference/pagespeedapi/runpagespeed#parameters
 * @return {Promise<Object>}
 */
const psi = async (_url, apiKey, parameters = {}) => {
    const url = getUrl(_url);
    const query = {
        url: url.origin,
        key: apiKey,
        ...parameters
    };
    const reqUrl =
        `https://www.googleapis.com/pagespeedonline/v5/runPagespeed` +
        '?' +
        Object.entries(query)
            .filter(([_, value]) => typeof value === 'string' && !!value)
            .map(([key, value]) => `${key}=${value}`)
            .join('&');

    const res = await fetch(reqUrl);
    return await res.json();
};

module.exports = psi;
