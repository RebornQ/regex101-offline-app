# Regex101 App (Offline)

This is an offline electron app for regex101.com.

## Introduction

I'm not affiliated with regex101.com, so I will not provide a regex101's static web source and package, but I will tell you how to create your own.

## Screenshot

![Screenshot](https://cdn.jsdelivr.net/gh/RebornQ/regex101-offline-app/assets/screenshot.png)

## Where you can get the web source

- [https://github.com/ibaaj/Regex101.com-offline-app](https://github.com/ibaaj/Regex101.com-offline-app)
- [https://github.com/xuxihai123/regex102](https://github.com/xuxihai123/regex102)
- ~[https://github.com/xuxihai123/regex101](https://github.com/xuxihai123/regex101)~
- [https://github.com/RebornQ/regex101-offline-generator](https://github.com/RebornQ/regex101-offline-generator) fork from [@xuxihai123/regex101](https://github.com/xuxihai123/regex101) (I have been fixed the missing files after generate.)
- [https://github.com/gaowanliang/regex101-proxy](https://github.com/gaowanliang/regex101-proxy)

> **⚠ Attention: You need to move the web source to `${projectDir}/public` directory! I just use a gitmodule to replace it!**

### Test your Web source

```shell
# need python
npm run server
# or
npm run start
```

## build

```shell
npm install
npm run make
```

## Thanks

- [@regex101](https://regex101.com/)
- [@firasdib](https://github.com/firasdib)
- [regex101 离线版——最好用的正则测试工具之一](https://www.chinapyg.com/thread-136817-1-1.html)
- [创建离线可用的Regex101应用](https://ixyzero.com/blog/archives/3529.html)
- [Running Regex101 Offline](http://dufferzafar.github.io/2015/05/30/running-regex101-offline/)
- [https://github.com/xuxihai123/regex102](https://github.com/xuxihai123/regex102)
- [https://github.com/xuxihai123/regex101](https://github.com/xuxihai123/regex101)
- [https://github.com/gaowanliang/regex101-proxy](https://github.com/gaowanliang/regex101-proxy)
