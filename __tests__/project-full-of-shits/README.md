# `koot-boilerplate`

# koot.js

> 想必，开发一套正常的 spa 应用对于大家可能都不陌生了
> spa 的用户体验也收到了所有人的一致认可，但 spa 项目所存在的，首屏加载慢，不支持 seo 等诟病也一直存在着
> 同样对于非资深的开发人员来讲，下面的问题可能也困扰着你
> 什么样的项目结构更合理、扩展性更强 ？
> 代码级的开发规范到底如何定义 ？
> 如何实现前端的代码质量把控 ？
> 如何
> 如何追求极致的用户体验 ？

-   追求极致的用户体验及开发体验
-   一套完整的、基于 React 的、完整的前端解决方案；
    -   包含，项目初始化脚手架，开发过程，开发规范，发布上线
    -   支持同构，像开发 SPA 一样简单的开发同构应用，尽可能的符合传统的开发流程，不做过度的依赖封装

> 假如 spa 应用的极限体验打分为 80 分，同构应用就是 90 分，但是 10 分的提升，完成同构的成本可能需要 200 分的努力，追求极致体验的 koot，就是帮助你像 开发 react 单页面应用一样简单的，就可以开发出同构项目。
> 开发一套正常的 spa 应用对于大家可能都不陌生了，像开发 spa 一样简单，并完成同构的体验正是 koot 所追求的

## koot.js 的定位

-   追求极致的用户体验及开发体验的完整的前端解决方案

## koot.js 的能力

-   默认支持同构、SPA 多种输出
-   极致的按需加载
-   无需配置，全自动的 webpack 集成开发环境，并支持自定义

## koot.js 的优势

-   无过度封装，像开发 SPA 项目一样简单
-   基于通用的 React 开发解决方案，和代码书写习惯，无需学习新的概念，学习成本低
-   完整的解决方案，包含但不限于：
    -   降低开发难度的下限，上手容易
    -   极具扩展性，及通用开发规范的项目架构
    -   快速低成本的开发体验
    -   严格的代码审查，及代码提交检测（可选）
    -   自动化测试（后续）
    -   智能最优打包方案
    -   完整的发布上线知道（后续自动化）
    -   数据统计（后续）
    -   最终项目整体问题检测，及评分系统（后续）
    -   可视化的开发过程（后续）

## Usage

> TODO: Usage

## 开发规范

### 命名规范

-   要努力推敲每个名称和其实际做的事情是否一致，也就是命名的准确性；
-   好的命名自带注释属性;

#### 目录

英文全部小写，连字符使用 '-'。（例如：some-component）;

#### 文件

英文全部小写，连字符使用 '-'。（例如：some-component.jsx）;

#### 变量

不同语言有不同的规范;
变量命名推荐两种规范：

-   下划线命名：some_variable
-   驼峰式命名：someVariable

#### Javascript 变量

推荐驼峰式

#### css 样式

因为 css 本身就是用中划线作为连接符
推荐使用中划线作为连接符（例如：font-family）
