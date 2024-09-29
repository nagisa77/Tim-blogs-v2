+++
title = 'Dora.ai 使用体验'
date = 2024-09-06T14:14:38+08:00
+++

### Website
[Dora.ai 官网](https://www.dora.run/ai)

Dora AI 是一个无需编码的 AI 网站生成工具，用户只需通过文本提示即可创建网站。它的主要特点包括生成 3D 动画、交互式设计以及无模板限制的自定义布局。Dora AI 支持从 Figma 等设计工具导入作品，并适合初学者和专业人士使用。平台目前提供免费版本，用户可以轻松创建具有视觉吸引力的动态网站 

[Dora AI - Sites beyond imagination, one prompt away.](https://www.dora.run/ai) 

[Dora: Start with AI, ship 3D animated websites without code](https://www.dora.run/) 

[Dora AI - Powerful AI-Powered Website Builder  | B12](https://www.b12.io/ai-directory/dora-ai/)。

### 尝试1：生成结果
Prompt: 
```
为达到解决高校社团人数众多，难以统一及时管理，活动申请等步骤费时费力的问题，使用 eclipse 和 Oracle 数据库来开发社团管理系统，主要模块是：个人信息模块，实现用户的注册、登录、用户个人信息的查询及修改；网上发布模块，实现用户在登录之后能上传照片，用户们都可以进行评论；日常活动模块，实现用户向管理员发出活动申请，以及对普通社员发出社团通知；审核模块，管理员对用户在网上发布的内容进行审核，对日常活动的申请进行审核；用户管理模块，管理员对用户进行添加、修改、删除、查询。统计分析不同社团成员的数量、流失率、活跃度等。
```

![Dora-ai 使用体验](https://blog-1307107697.cos.ap-shanghai.myqcloud.com/Dora-ai%20使用体验.png)

### 尝试2：生成结果
![Dora-ai 使用体验-1](https://blog-1307107697.cos.ap-shanghai.myqcloud.com/Dora-ai%20使用体验-1.png)

之后继续生成，显示博客内容详情页面，但我发现设计语言被随机生成成了另外一种风格。

![Dora-ai 使用体验-2](https://blog-1307107697.cos.ap-shanghai.myqcloud.com/Dora-ai%20使用体验-2.png)

### 尝试3：自定义设计风格
Prompt:
```
A landing page for a software engineer's personal blog often shares technical articles and blog posts. It needs to have a personal introduction area and another page or area to display the article content. Black and white style, as simple as possible.
```

![Dora-ai 使用体验-3](https://blog-1307107697.cos.ap-shanghai.myqcloud.com/Dora-ai%20使用体验-3.png)

### 尝试生成所有博客页面
![Dora-ai 使用体验-4](https://blog-1307107697.cos.ap-shanghai.myqcloud.com/Dora-ai%20使用体验-4.png)

![Dora-ai 使用体验-5](https://blog-1307107697.cos.ap-shanghai.myqcloud.com/Dora-ai%20使用体验-5.png)

然而，生成的博客内容布局仍然随机，难以使用定制化代码去呈现，整体展现依然像是首页风格。由于生成的页面编程难度较大，客制化难度也随之增加。

### 结论
Dora.ai 适合用于生成网站「首页」，但具体逻辑还是需要自行实现。使用 Dora.ai 构建网站设计需遵循其生成的固定「设计语言」，后续功能可能需要适配这个设计原则，适配成本可能会高于自行设计和开发。