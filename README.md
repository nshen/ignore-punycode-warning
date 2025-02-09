# Ignore punycode deprecation warning 

[中文](#chinese)

Temporarily ignore the annoying punycode warning with a simple import.

## Installation

```bash
npm install ignore-punycode-warning
```
## Usage

Simply import this package at the beginning of your entry file:

```ts
import 'ignore-punycode-warning';

// The rest of your code
```

or for CommonJS:

```js

require('ignore-punycode-warning');

// The rest of your code
```
This will temporarily suppress the punycode deprecation warning.

## Why?

Node.js has been showing a annoying deprecation warning for the punycode module. 

```bash
(node:2701) [DEP0040] DeprecationWarning: The `punycode` module is deprecated. Please use a userland alternative instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
```

This package provides a quick solution to ignore this warning until you're ready to address it in your project.

-----

<a name="chinese"></a>

## 忽略 punycode deprecation warning 报错

只需要引入此包就可以临时忽略讨厌的 punycode warning。

## 安装

```bash
npm install ignore-punycode-warning
```

## 使用方法

只需在您的入口文件开头导入此包：


```ts
import 'ignore-punycode-warning';

// The rest of your code
```

如果是 CommonJS:

```js

require('ignore-punycode-warning');

// The rest of your code
```

## 为什么使用这个包？

Node.js 一直在显示讨厌的 punycode 模块的弃用警告。

```bash
(node:2701) [DEP0040] DeprecationWarning: The `punycode` module is deprecated. Please use a userland alternative instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
```

这个包提供了一个快速解决方案，可以忽略这个警告，直到您准备好在项目中解决它。

