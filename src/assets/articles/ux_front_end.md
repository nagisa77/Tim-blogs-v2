+++
title = '做一个网站之前，需要提前考虑什么（用户体验、前端初始化构建）？'
date = 2024-09-11
+++

## user experience 的五个步骤

设计过程可以分为五个关键步骤：共情、定义、构思、原型设计和测试。这些步骤帮助设计师从用户需求出发，逐步形成一个完整的设计方案。

### 1. 共情

共情是设计的第一步，重点是理解用户的需求和痛点。设计师通过访谈、问卷调查等方式，深入了解用户的使用场景，掌握他们的期望和挑战。通过竞品分析，还可以进一步了解市场现有产品的优缺点，为设计提供更多参考。

### 2. 定义

定义阶段是将收集到的用户信息整理归纳，并确定最重要的用户问题。设计师需要明确用户画像，列出他们的需求清单，并以此为基础构建问题陈述。这一步确保设计过程中始终关注用户的核心需求，从而有针对性地解决实际问题。

### 3. 构思

构思是一个创意爆发的阶段。设计师通过头脑风暴提出尽可能多的解决方案，而不局限于现实可行性。常用的方法包括“我们如何才能……”的问题形式以及竞品审查，帮助团队从不同角度探讨可能的设计方案。

### 4. 原型设计

原型设计是将构思阶段的想法转化为可视化的设计模型。设计师通常从低保真模型开始，通过线框图等工具迅速搭建产品结构，并展示信息架构。原型是获取用户反馈的重要工具，可以帮助设计师在正式产品开发之前进行多轮优化。

### 5. 测试

测试是设计的最后一个阶段，设计师通过用户测试来验证原型的可用性。通过实际用户的操作和反馈，设计师可以发现产品中的不足，并进行改进，确保最终的产品能够满足用户需求并带来良好的体验。

这五个步骤相辅相成，形成了一个完整的设计闭环，确保设计师在每一步都考虑到用户的需求和反馈。

## Web

### 1. 提前做好响应式的布局

如何做好响应式布局，可以看我的文章 [响应式布局指南](https://nagisa77.github.io/posts/rwd/)，里面有较为详细的解释。

### 2. 提前做 i18n 策略

#### 什么是 i18n 策略？

i18n 策略指的是国际化（Internationalization）策略，旨在使应用程序能够适应不同国家和地区的语言、文化和地区设置，而不需要对代码进行大规模修改。

#### 在 Vue 中做 i18n 策略

安装好必要的依赖：

```bash
npm install vue-i18n
```

在 `main.js` 中使用 `i18n`：

```javascript
import { createApp } from 'vue';
import App from './App.vue';
import { createI18n } from 'vue-i18n';

import en from './locales/en.json';
import zh from './locales/zh.json';

const getBrowserLanguage = () => {
  const lang = navigator.language || navigator.userLanguage;
  return lang.includes('zh') ? 'zh' : 'en'; // 简单示例，可以扩展更多语言
};

// 创建 i18n 实例
const i18n = createI18n({
  locale: getBrowserLanguage(), // 默认语言为用户浏览器的语言
  fallbackLocale: 'en', // 如果找不到对应的翻译，使用的默认语言
  messages: {
    en,
    zh,
  },
});

const app = createApp(App);
app.use(i18n);
app.mount('#app');
```

在页面中根据不同语言返回：

```vue
<template>
  <h1>{{ $t('greeting') }}</h1>
  <h2>{{ $t('message.hello') }}</h2>
</template>

<script>
export default {
  name: 'i18nPage',
};
</script>
```

`src/locales/en.json` 示例：

```json
{
  "greeting": "Hello",
  "message": {
    "hello": "This is my I18N page"
  }
}
```

示例页面: [i18n 页面示例](https://nagisa77.github.io/Vue-example/#/i18n)

### 3. 提前做深色模式策略 — css 变量

#### 创建全局 CSS

`src/assets/styles/global.css`:

```css
:root {
  --background-color: #ffffff;
  --text-color: #000000;
  --card-background-color: #f5f5f5;
}

[data-theme="dark"] {
  --background-color: #333333;
  --text-color: #ffffff;
  --card-background-color: #444444;
}
```

在 `main.js` 中导入全局 CSS:
![做一个网站之前，需要提前考虑什么（用户体验、前端初始化构建）？](https://blog-1307107697.cos.ap-shanghai.myqcloud.com/做一个网站之前，需要提前考虑什么（用户体验、前端初始化构建）？.png)

在实际页面中运用: 
![做一个网站之前，需要提前考虑什么（用户体验、前端初始化构建）？-1](https://blog-1307107697.cos.ap-shanghai.myqcloud.com/做一个网站之前，需要提前考虑什么（用户体验、前端初始化构建）？-1.png)

#### 在实际页面中运用深色模式：

页面示例: [深色模式示例页面](https://nagisa77.github.io/Vue-example/#/night_mode)


## 结论

通过以上步骤，可以提前做好响应式布局、国际化和深色模式等用户体验策略，从而在开发过程中更加高效地实现这些功能。
