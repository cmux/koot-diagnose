/* eslint-disable @typescript-eslint/no-explicit-any */
// declare module 'kootDiagnosePSI';

export type Category =
    | 'accessibility'
    | 'best-practices'
    | 'performance'
    | 'pwa'
    | 'seo';

export interface Result {
    lighthouseResult: {
        audits: {
            [auditId: string]: Audit;
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

export type AuditDetailsType =
    | 'table'
    | 'opportunity'
    | 'debugdata'
    | 'filmstrip';
export type AuditDetailsHeadingType =
    | 'text'
    | 'url'
    | 'timespanMs'
    | 'thumbnail'
    | 'bytes'
    | 'ms'
    | 'code';
export interface AuditDetailsHeading {
    key: string;
    label?: string;
    text?: string;
    valueType?: AuditDetailsHeadingType;
    itemType?: AuditDetailsHeadingType;
    displayUnit?: 'duration' | 'kb';
}

export interface Audit {
    id: string;
    title: string;
    description?: string;
    score: string;
    scoreDisplayMode: string;
    numericValue?: number;
    displayValue?: string;
    details: {
        type: AuditDetailsType;
        headings?: Array<AuditDetailsHeading>;
        items?: Array<{
            [key: string]: any;
        }>;
        overallSavingsMs?: number;
        overallSavingsBytes?: number;
        summary?: {
            [summaryKey: string]: any;
        };
        scale?: number;
        [detail: string]: any;
    };
    warnings?: Array<any>;
}

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
): Promise<Result>;

export default psi;
