const normalizeUrl = require('normalize-url');

/**
 * 返回 URL 类实例
 * @param {string} url
 * @return {URL}
 */
const get = input => {
    if (typeof input !== 'string') throw new Error('input not string');
    const url = normalizeUrl(input);
    return new URL(url);
};

module.exports = get;
