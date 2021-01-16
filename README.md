# recursion-data

无限级树形递归组件，默认数据源 Vue.$store.state，用于 vue 项目 vuex state 数据展示。也可传入其他多层级数据。
组件样式仿照 Vue Devtools 数据面板。

# install

```js
npm install recursion-data
```

# use

```js
// main.js
import recursionData from "recursion-data";
Vue.use(recursionData);
```

```vue
<template>
  <div>
    ...
    <recursion-data :state="recursionData"></recursion-data>
    ...
  </div>
</template>

<script>
export default {
  data() {
    return {
      recursionData // 用于展示的多层级数据 Object default: this.$store.state
    };
  }
};
</script>
```
