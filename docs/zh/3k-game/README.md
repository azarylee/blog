## 项目说明
此项目为Articulate 3K游戏，其中包括捕鱼，牛牛等游戏。

## 如何运行项目

``` js{4}
node server.js

or 

nodemon server.js （首先需要安装nodemon)
``` 

nodemon是一个node工具，它能监控项目变化，并且实时自动更新。

## 如何打包项目

``` js{4}
cd tools

node build --pub
```

项目会需要安装JAVA依赖，不然打包会报错。