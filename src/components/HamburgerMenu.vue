<template>
  <div class="hamburger-menu mobile-only" :class="{'full': isFullNav}">
    <div class="nav-dimmer" @click="navToggle" />
    <div class="nav-touchable">
      <button class="nav-btn" @click="navToggle">
        <div class="label" v-show="!isFullNav">
          <fa :icon="['fas', 'bars']" />
        </div>
        <div class="label" v-show="isFullNav">
          <fa :icon="['fas', 'times']" />
        </div>
      </button>
      <router-link v-for="(r, index) in routes" :key="index" :to="r.to" class="nav-btn" exact>
        <span v-text="r.name" />
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    routes: {
      type: Array,
      required: true,
    },
  },
  computed: {
    fullNavHeight() {
      return -1 * (this.$props.routes.length * 50) + 'px';
    },
  },
  data() {
    return {
      isFullNav: false,
    };
  },
  mounted() {
    this.$el.style.bottom = this.fullNavHeight;
  },
  methods: {
    navToggle() {
      this.$data.isFullNav = !this.$data.isFullNav;
      if (this.$data.isFullNav) {
        this.$el.style.bottom = 0;
      } else {
        this.$el.style.bottom = this.fullNavHeight;
      }
    },
  },
  watch: {
    $route() {
      this.$data.isFullNav = true;
      this.navToggle();
    },
  },
};
</script>

<style scoped lang="scss">
@media print {
  .hamburger-menu {
    display: none;
  }
}
svg {
  color: $theme-color1;
}
.hamburger-menu {
  z-index: 100;
  transition: all 0.1s ease-in;
  width: 100%;
  position: fixed;
  left: 0;
  border-top: 1px solid #ccc;
  .nav-dimmer {
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    display: none;
  }
  &.full {
    bottom: 0;
    .nav-dimmer {
      display: initial;
      background-color: $dimmer-color;
    }
  }
  .nav-touchable {
    position: relative;
  }
  .nav-btn {
    border: none;
    width: 100%;
    text-decoration: none;
    height: $mobile-nav-height;
    background-color: #fff;
    font-family: h;
    font-size: 20px;
    text-transform: uppercase;
    color: #333;
    &.router-link-active {
      opacity: 1;
      > span {
        border-bottom: 1px solid $theme-color1;
      }
    }
    @include flex-center();
    &:focus {
      outline: none;
    }
    span {
      text-align: center;
    }
  }
}
</style>
