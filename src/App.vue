<template>
  <div id="app">
    <div class="content">
      <router-view/>
    </div>
    <footer>&copy; Sitch {{new Date().getFullYear()}}</footer>
    <hamburger-menu :routes="routes"/>
  </div>
</template>


<script>
export default {
  data() {
    return {
      routes: [
        {
          to: "/",
          name: "Home"
        },
      ]
    };
  },
};
</script>

<style lang="scss">
@import "./scss/_globals.scss";
</style>
