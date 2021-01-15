/**
 * 组件
 */
import recursionData from "./components/recursion-data.vue";
recursionData.install = Vue => {
  Vue.component(recursionData.name, recursionData);
}; // 给组件配置install方法
export default recursionData;
