|--vue_loc                     // 工程名称 (vue + elementUi)
|--node_modules                // 本地nodejs插件模块
|--build                       // webpack构建模块
|  |--build.js                 // 生产环境构建模块
|  |--check-versions.js        // 检查node,npm版本
|  |--utils.js                 // 构建工具相关配置
|  |--vue-loader.conf.js       // 插件vue-loader 对vue文件样式的处理的
|  |--webpack.base.conf.js     // webpack构建基础配置
|  |--webpack.dev.conf.js      // webpack本地测试环境构建配置
|  |--webpack.prod.conf.js     // webpack生产环境配置
|  |--webpack.test.conf.js     // webpack测试配置
|--config                      // webpack各个环境环境变量配置
|  |--dev.env.js               // 测试环境环境变量配置
|  |--index.js                 // webpack主环境变量配置文件
|  |--prod.env.js              // 生产环境环境变量配置
|  |--test.env.js              // 测试环境变量配置
|--src                         // 源文件跟目录
|  |--static                   // 静态资源目录 根据绝对路径引用 不会打包进项目
|  |--assets                   // 静态资源文件目录 会打包进项目
|  |  |--common                // 公共文件目录
|  |  |  |--lang               // 语言包配置目录
|  |  |  |  |--zh.js           // 中文配置文件
|  |  |  |  |--en.js           // 英文配置文件
|  |  |--iconFont              // 矢量文件目录
|  |  |  |--iconfont.css       // 矢量文件样式
|  |  |  |--iconfont.eot       // 允许矢量字体用@font-face嵌入到网页 ie支持的格式
|  |  |  |--iconfont.svg       // 使用SVG技术来呈现字体，主要用于ios
|  |  |  |--iconfont.ttf       // 是windows和mac系统最常用的字体格式 ,适用于非ie浏览器,主要用于移动端
|  |  |  |--iconfont.woff      // 封装了ttf和otf，适用于非ie浏览器
|  |  |--josn                     // 本地测试mock数据目录
|  |  |  |--menu.js               // 菜单数据mock目录
|  |--components               // vue本地组件目录
|  |  |--common                // vue组件基础目录
|  |--config                   // 常用的js组件封装
|  |  |--axios.js              // 对ajax封装统一入口的文件
|  |  |--env.js                // 配置baseurl和路由模式的文件
|  |  |--lazyLoading.js        // 菜单和组件关联的配置
|  |  |--MenuUtils.js          // 对菜单数据组装为路由数据，主要用于动态加载菜单
|  |  |--mUtils.js             // 常用小工具文件
|  |  |--rem.js                // 针对移动端适配方案的文件
|  |--i18n                     // 国际化目录
|  |  |--index.js              // 国际化实例
|  |--router                   // 前端路由目录
|  |  |--index.js              // 路由配置问价
|  |--service                  // 前后交互api汇总目录
|  |  |--getData.js            // api接口
|  |--store                    // 数据处理中心或者状态管理器目录（vuex）
|  |  |--action.js             // 所有前后交互管理文件，用以触发mutations
|  |  |--getters.js            // 数据处理中心（state）暴露给页面的入口
|  |  |--index.js              // store入口文件(实例化)
|  |  |--mutations.js          // 静态请求管理文件,用以改变state状态
|  |  |--mutations-types.js    // 对action和mutations类名管理文件
|  |--style                    // 样式目录
|  |  |--bc.css                // 工程主布局样式文件
|  |  |--common.scss           // 样式初始化文件
|  |  |--mixin.scss            // sass基础文件，服务于所有央视文件，包括style @import导入 @include 调用
|  |  |--theme.scss            // 样式主题文件
|  |--template                 // 模板目录
|  |  |--page                  // 模板子目录
|  |--main.vue                 // 登录后主页面
|  |--App.vue                  // 页面最外层容器文件
|  |--main.js                  // vue实例化入口文件
|--dist                      // 构建输出目录
|--test                        // 测试目录
|  |--unit                     // 单元测试目录
|  |--e2e                      // ui测试目录或者黑盒测试
|--.babelrc                    // es6转es5及相关插件配置文件
|--.postcssrc.js               // css预处理全自动增加前缀配置
|--.eslintignore               // 语法检测文件忽视配置
|--index.html                  // 入口页面
|--package.json                // webpack打包依赖配置



   

# 安装依赖
npm install   

# 本地服务localhost:8082
npm run dev

# 便宜打包输出文件
npm run build

# 单元测试
npm run unit

# ui测试
npm run e2e

# 单元ui测试
npm test

# 更新日志 
12-06
增加语言国际化，公共样式提取
12-11
增加mock接口，模拟真实请求，增加进度条



