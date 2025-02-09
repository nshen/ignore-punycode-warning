# Modern TypeScript NPM Package Template

[English](#english) | [中文](#中文)

<a name="english"></a>

A template for developing modern npm packages using TypeScript, supporting both CommonJS (CJS) and ECMAScript Modules (ESM). This template uses tsup for efficient bundling.

## Features

- 🚀 TypeScript support
- 📦 Dual CJS and ESM output
- 🛠 tsup for fast and efficient bundling
- 📊 Type declarations included
- 🔄 Easy to use and customize

## Getting Started

```
git clone https://github.com/nshen/tsup-npm-package-template 
cd tsup-npm-package-template 
# Modify as needed
npm run build
npm login
npm publish
```
## Usage

After publishing the package, you can import it in your project:

```ts
// ESM
import { yourFunction } from 'your-package-name';

// CommonJS
const { yourFunction } = require('your-package-name');
```

## Configuration

The project uses tsup for bundling. You can modify the tsup.config.ts file to adjust the build configuration.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License

---

<a name="中文"></a>

# 现代 TypeScript NPM 包模板

这是一个使用 TypeScript 开发现代化 npm 包的模板，同时支持 CommonJS (CJS) 和 ECMAScript 模块 (ESM)。本模板使用 tsup 进行高效打包。

## 特性

- 🚀 支持 TypeScript
- 📦 同时输出 CJS 和 ESM 格式
- 🛠 使用 tsup 进行快速高效的打包
- 📊 包含类型声明文件
- 🔄 易于使用和自定义

## 快速开始

```
git clone https://github.com/nshen/tsup-npm-package-template 
cd tsup-npm-package-template 
# Modify as needed
npm run build
npm login
npm publish
```

## 使用方法

安装包后，您可以在项目中导入它：

```ts
// ESM
import { yourFunction } from 'your-package-name';

// CommonJS
const { yourFunction } = require('your-package-name');
```

## 配置

项目使用 tsup 进行打包。您可以修改 tsup.config.ts 文件来调整构建配置。

## 贡献

欢迎贡献！请随时提交 Pull Request。

## 许可证

本项目采用 MIT 许可证

