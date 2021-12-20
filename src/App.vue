<template>
  <router-view>
    <!-- toaster -->
    <notifications></notifications>
  </router-view>
</template>

<script>
export default {
  name: "App",
};
</script>

<style lang="scss">
@import "./scss/base.scss";
</style>
