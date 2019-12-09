declare module 'kootDiagnosePSI';

export type PSIResult = {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    [errorType: string]: any;
};

//

/**
 * 对目标域名的首页进行 PageSpeed Insights 检测
 */
async function psi(
    url: string | URL,
    /**
     * Google PageSpeed API Key
     * - 如果提供，检测时会使用该 Key 进行请求
     */
    apiKey?: string,
    /**
     * Google PageSpeed API 参数
     * https://developers.google.com/speed/docs/insights/v5/reference/pagespeedapi/runpagespeed#parameters
     */
    parameters: {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        [errorType: string]: any;
    } = {}
): Promise<PSIResult>;

export default psi;
