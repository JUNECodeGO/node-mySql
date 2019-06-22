# node.js 操作 mySql

>node.js简易搭建服务器及完成mySql数据库登陆跳转页面操作

### NODEJS 分层
+ dao: 存放dao文件,负责和数据库交互
+ serve: 存放service文件,负责和dao交互
+ log: 存放日志文件
+ web: 存放controller文件，负责和service交互
+ page: 存放页面
+ filter: 过滤页面,读写cookie
+ index.js: 项目入口文件

### 通过该项目掌握登陆页面,访问数据库,成功登陆后,记录cookie 跳转主页面 若无cookie访问记录则重新进入登陆页面


