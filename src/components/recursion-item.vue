<template>
  <div class="recursion-item" :style="`font-size: ${fontSize}`">
    <template v-if="dataType(recursionVal) === 'Function'"> </template>
    <!-- 对象/数组 -->
    <template
      v-else-if="
        (dataType(recursionVal) === 'Object' &&
          Object.keys(recursionVal).length) ||
          (dataType(recursionVal) === 'Array' && recursionVal.length)
      "
    >
      <div
        class="item-inline"
        :style="`padding-left: ${level * 14}px`"
        @click="handleIsShowItem"
      >
        <div style="display: flex; align-items: center;">
          <span :class="{ 'item-icon': true, 'icon-right': isShowItem }"></span>
          <span class="item-key">{{ recursionKey }}:</span>
        </div>
        <div class="item-val item-black">{{ dataType(recursionVal) }}</div>
      </div>
      <template v-if="isShowItem">
        <recursion-item
          v-for="(val, key) in recursionVal"
          :key="key"
          :recursionVal="val"
          :recursionKey="key"
          :level="level + 1"
        ></recursion-item>
      </template>
    </template>

    <!-- 基本数据类型 -->
    <div class="item-inline" v-else :style="`padding-left: ${level * 14}px`">
      <div class="item-key" style="margin-left: 14px;">{{ recursionKey }}:</div>
      <div class="item-val">
        <span
          class="item-gray"
          v-if="!recursionVal && recursionVal !== 0 && recursionVal !== false"
          >null</span
        >
        <span class="item-red" v-else-if="dataType(recursionVal) === 'String'">
          "{{ recursionVal }}"</span
        >
        <span class="item-blue" v-else>{{ recursionVal }}</span>
      </div>
    </div>
    <div style="flex: 1;"></div>
  </div>
</template>

<script>
export default {
  name: "recursion-item",
  props: {
    // 当前遍历的层级
    level: {
      default: 0,
      type: Number
    },
    // 键名
    recursionKey: {
      default: ""
    },
    // 键值
    recursionVal: {
      default: ""
    },
    fontSize: {
      default: "18px",
      type: String
    }
  },
  data() {
    return {
      isShowItem: false
    };
  },
  methods: {
    dataType(data) {
      let typeStr = Object.prototype.toString.call(data);
      return typeStr.slice(8, typeStr.length - 1);
    },
    handleIsShowItem() {
      this.isShowItem = !this.isShowItem;
    }
  }
};
</script>

<style scoped>
.recursion-item {
  font-family: Menlo, Consolas, monospace;
  margin-bottom: 4px;
  --purple: rgb(128, 0, 128);
  --black: #444;
  word-break: break-all;
  box-sizing: border-box;
}
.recursion-item .item-inline {
  display: flex;
}

.recursion-item .item-icon {
  width: 0;
  height: 0;
  display: inline-block;
  border-top: 4px solid transparent;
  border-bottom: 4px solid transparent;
  border-left: 6px solid #2c3e50;

  transition: transform 0.1s ease;
  margin-right: 8px;
  opacity: 0.7;
}
.recursion-item .item-icon.icon-right {
  transform: rotate(90deg);
}
.recursion-item .item-key {
  white-space: nowrap;
  margin-right: 4px;
  color: var(--purple);
}
/* .recursion-item .item-key::after {
  content: ":";
  display: inline-block;
  color: var(--black);
  margin-right: 8px;
} */

.recursion-item .item-black {
  color: var(--black);
}
.recursion-item .item-gray {
  color: #999;
}
.recursion-item .item-red {
  color: #c41a16;
}
.recursion-item .item-blue {
  color: rgb(26, 26, 166);
}
</style>
