<template>

  <div id="app">
    <nav id="nav">
      <div class="nav-inner">
        <a href="#app">
          <img class="logo" alt="logo" src="./assets/images/cosmicClientLogo.png" />
        </a>
        <div class="nav-links not-on-mobile">
        <router-link v-for="r in routes" :key="r.name" :to="r.to">
          <span v-text="r.name" />
        </router-link>
        </div>
      </div>
    </nav>
    <div class="content">
      <router-view />
      <footer>&copy; Cosmic {{new Date().getFullYear()}}</footer>
    </div>
    <hamburger-menu :routes="routes" />
  </div>
</template>


<script>
export default {
  data() {
    return {
      routes: [
        {
          to: "/",
          name: "Download"
        },
        {
          to: "/Features",
          name: "Features"
        },
        {
          to: "/TroubleShooting",
          name: "Trouble Shooting"
        },
        {
          to: "/BugReports",
          name: "Bug Reports"
        },
      ]
    };
  },
};
</script>

<style lang="scss">
@import "./scss/_globals.scss";
.content {
  width: 100%;
  padding-top: $nav-height;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  @media #{$mobile} {
    padding-top: 0;
    padding-bottom: $mobile-nav-height;
  }
}
footer {
  height: $footer-height;
  @include flex-center();
}
#nav {
  position: fixed;
  z-index: 999;
  width: 100%;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.075);
  display: flex;
  justify-content: center;
  background-color: #fff;
  top: 0;
  left: 0;
  // text-transform: uppercase;
}
.nav-inner {
  width: 100%;
  max-width: $max-width;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: $nav-height;
  padding: 0 30px;
  .logo {
    margin-top: -8px;
    height: 60px;
    flex: 0 0 auto;
  }
  .nav-links {
    height: 100%;
  }
  a {
    color: #555;
    font-family: h;
    height: 100%;
    display: inline-flex;
    align-items: center;
    text-decoration: none;
    transition: all linear 0.1s;
    &:hover,
    &:focus {
      opacity: 0.65;
    }
    > span {
      padding: 0 20px;
    }
    &:not(:first-child) {
      > span {
        border-left: 1px solid $theme-color1;
      }
    }
  }
}
</style>
