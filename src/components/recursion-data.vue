<template>
  <div class="recursion-data">
    <recursion-item
      v-for="(item, key) in state"
      :key="key"
      :level="0"
      :recursionKey="key"
      :recursionVal="item"
      :fontSize="fontSize"
    ></recursion-item>
  </div>
</template>

<script>
import recursionItem from "./recursion-item.vue";
export default {
  name: "recursion-data",
  components: { recursionItem },
  props: {
    state: {
      default() {
        return this.$store ? this.$store.state : {};
      },
      type: Object
    },
    fontSize: {
      default: "18px",
      type: String
    }
  }
};
</script>
