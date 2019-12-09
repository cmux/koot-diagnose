declare module 'kootDiagnoseCrawler';

export interface CrawlerOptions {
    /** 请求的页面数量总上限 */
    maxCrawl?: number;
    /** 相似地址的最多请求次数，`false` 或`负数`表示无限制 */
    similarCountMax?: number | false;
    /**
     * 是否输出更多的日志
     * @default false
     */
    verbose?: boolean;
    /** `puppeteer-cluster` 选项 */
    cluster?: {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        [option: string]: any;
    };
}
export type CrawlerResult = {
    [errorType: string]: CrawlerError[];
};
export interface CrawlerError {
    /** 错误信息 */
    readonly message?: string;
    /** 错误类型 */
    readonly type?: string;
    /** 错误关联的 URL */
    readonly url: string;
    /** 当前页面 URL (和错误 URL 不同时) */
    readonly pageUrl?: string;
    /** 此次请求的长度 (单位: 字节) */
    readonly contentLength?: number;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    [key: string]: any;
}

//

/**
 * 利用爬虫尝试访问站点内的所有链接，检测以下内容
 * -   损坏的链接
 * -   文件尺寸过大的请求 (如图片、JS 代码等)
 * -   HTML、CSS、JS 没有 gzip 的请求
 * -   页面载入过程中的报错
 */
async function crawler(
    entryURL: string,
    options?: CrawlerOptions
): Promise<CrawlerResult>;

export default crawler;
