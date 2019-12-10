const fetch = require('node-fetch');
const getReqUrl = require('./commons/get-psi-request-url');

/**
 * 对目标域名的首页进行 PageSpeed Insights 检测
 * @async
 * @param {string|Url} url
 * @param {string} [apiKey]
 * @param {Object} [parameters] https://developers.google.com/speed/docs/insights/v5/reference/pagespeedapi/runpagespeed#parameters
 * @return {Promise<Object>}
 */
const psi = async (url, apiKey, parameters = {}) => {
    const res = await fetch(getReqUrl(url, apiKey, parameters));
    return await res.json();
};

module.exports = psi;
