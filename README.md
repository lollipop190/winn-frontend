# winn-frontend

> 2020citicup
> source codes are saved in src/components
* Account.vue (now in src/components/AccountComps)
* Details.vue
* Home.vue
* Login.vue

## Tips
 * 我们只需要写vue文件即可，html是不需要写的。
 * 在Account页面使用了axios框架向后端请求数据。可用npm install axios --save安装（cnpm也可以）。
 * src/network中封装了通过api向后端请求的功能以降低耦合性和可读性。
## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

### View UI 插件引入.

如果您想要看到这个插件的效果，您需要：

```bash
# install view UI
npm install view-design --save
```

更多插件必备配置在这个版本已经实现。

配合此插件已修改的文件有：

```
src/main.js
```

