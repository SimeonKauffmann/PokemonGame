<template>
  <div>
    <p>{{ `${copyright}: ${year}` }}</p>
  </div>
</template>

<script>
export default {
  name: "Copyright",
  props: {
    copyright: String,
    year: Number,
  },
};
</script>


<style lang='scss' scoped>
</style>
