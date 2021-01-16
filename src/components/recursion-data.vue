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
      type: Object,
      default() {
        return this.$store ? this.$store.state : {};
      }
    },
    fontSize: {
      type: String,
      default: "18px"
    }
  }
};
</script>
