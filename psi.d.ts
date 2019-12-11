/* eslint-disable @typescript-eslint/no-explicit-any */

declare module 'kootDiagnosePSI';

export interface PSIResult {
    lighthouseResult: {
        audits: {
            [auditId: string]: {
                id: string;
                title: string;
                description?: string;
                score: string;
                scoreDisplayMode: string;
                numericValue?: number;
                displayValue?: string;
                details: {
                    [detail: string]: any;
                };
            };
        };
        categories: {
            [categoryId: string]: {
                id: string;
                title: string;
                auditRefs: {
                    [auditId: number]: {
                        id: string;
                        weight: number;
                        group?: string;
                    };
                };
                score: number;
                description?: string;
                manualDescription?: string;
            };
        };
        categoryGroups: {
            [groupId: string]: {
                title: string;
                description?: string;
            };
        };
        [key: string]: any;
    };
    [errorType: string]: any;
}

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
        category?: Category | Category[];
        locale?: string;
        strategy?: 'desktop' | 'mobile';
        utm_campaign?: string;
        utm_source?: string;
        [errorType: string]: any;
    } = {}
): Promise<PSIResult>;

export default psi;

// ============================================================================

type Category =
    | 'accessibility'
    | 'best-practices'
    | 'performance'
    | 'pwa'
    | 'seo';
