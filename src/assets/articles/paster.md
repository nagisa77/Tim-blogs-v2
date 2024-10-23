+++
title = 'Paster -- 对象存储剪贴板'
date = 2024-10-23
+++
# Paster

## 什么是 Paster？

近期在 Hacker News 上面发现的一款匿名、免费的存储文字、图片、视频的网络应用 [https://paste.c-net.org](https://paste.c-net.org)。用户可以上传文字、图片、视频，并且获得一个链接：`https://paste.c-net.org/xxx`。通过这个链接，可以再次访问用户上传的资源。当然，有 180 天的存储限制，以及 50M 的大小限制。

## 二次开发

我根据作者提供的功能，二次开发了一个用户友好的 UI 页面 [http://www.chenjiating.com/paster/](http://www.chenjiating.com/paster/)。

![Paster](https://blog-1307107697.cos.ap-shanghai.myqcloud.com/Paster.jpeg)

## Paster 本身原理解析

![Paster-1](https://blog-1307107697.cos.ap-shanghai.myqcloud.com/Paster-1.png)

通过这个加密规则，以及开源服务器的代码，可以保证服务端无法窥探用户数据。明文 key 不会保存在服务端，且只有拥有 key 才可以访问数据。

改天我会实现我的版本。