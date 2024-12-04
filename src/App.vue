<template>
  <div class="site">
    <header :class="['site-header-desktop', { collapsed: isMenuCollapsed }]">
      <button class="menu-toggle" @click="toggleMenu">
        {{ isMenuCollapsed ? '>>' : '<<' }}
      </button>
      <h1 class="header-text header-title" v-show="!isMenuCollapsed" @click="navigateToHome">Tim's Blog</h1>
      <HeaderContent v-show="!isMenuCollapsed" />
    </header>
    <header class="site-header-mobile">
      <h1 class="header-text header-title-mobile" @click="navigateToHome">Tim's Blog</h1>
      <el-icon size="30" class="header-menu-icon" @click="toggleMobileMenu">
        <Menu />
      </el-icon>
    </header>
    <div class="header-content-mobile" :class="{ 'menu-visible': menuVisible }">
      <HeaderContent @route-clicked="handleRouteClicked" />
    </div>
    <div :class="['site-content', { collapsed: isMenuCollapsed }]">
      <router-view />
    </div>
  </div>
</template>

<script>
import HeaderContent from './components/HeaderContent.vue';

export default {
  components: {
    HeaderContent,
  },
  data() {
    return {
      menuVisible: false, // 移动端菜单状态
      isMenuCollapsed: false, // 桌面菜单状态
    };
  },
  methods: {
    toggleMobileMenu() {
      this.menuVisible = !this.menuVisible;
    },
    toggleMenu() {
      this.isMenuCollapsed = !this.isMenuCollapsed;
    },
    navigateToHome() {
      this.$router.push('/');
    },
    handleRouteClicked(routeName) {
      console.log(`Route clicked: ${routeName}`);
      if (this.menuVisible) {
        this.menuVisible = false;
      }
    },
  },
};
</script>

<style scoped>
.site {
  display: flex;
  width: 100%;
  height: 100%;
}

.header-title-mobile {
  margin-left: 20px;
  font-size: 30px;
}

.menu-toggle {
  margin-bottom: 20px;
  padding: 15px 15px;
  background-color: var(--article-link-color);
  border: none;
  color: var(--button-text-color);
  cursor: pointer;
  border-radius: 15px;
}

.menu-toggle:hover {
  background-color: var(--article-link-color);
}

.header-content-mobile {
  width: 100%;
  top: 100px;
  height: 0;
  padding: 0 20px;
  background-color: var(--header-background-color);
  position: absolute;
  z-index: 1000;
  overflow: hidden;
  transition: height 0.3s ease-out, padding 0.3s ease-out;
}

.header-content-mobile.menu-visible {
  height: calc(100% - 100px);
  padding: 20px;
}

.site-header-desktop.collapsed {
  width: 44px;
  padding: 100px 0px;
  height: calc(100vh - 200px);
}

.site-header-desktop {
  height: calc(100vh - 200px);
  width: 300px;
  padding: 100px 60px;
  background-color: var(--header-background-color);
  transition: width 0.3s ease;
}

.header-menu-icon {
  margin-right: 20px;
  color: var(--header-text-color);
}

.site-header-mobile {
  height: 100px;
  background-color: var(--header-background-color);
  width: 100%;
  display: none;
  position: fixed; /* 保证header在移动端固定在顶部 */
  top: 0;
  left: 0;
  z-index: 1000;
  transition: transform 0.3s ease-in-out;
  transform: translateY(0); /* 初始状态显示 */
}

.site-header-mobile.hidden {
  transform: translateY(-100%); /* 隐藏时将header移出视口 */
}

.site-content {
  height: 100vh;
  width: calc(100% - 300px);
  background-color: var(--content-background-color);
  transition: margin-left 0.3s ease;
}

.site-content.collapsed {
  width: calc(100% - 44px);
}

.header-text {
  color: var(--header-text-color);
}

@media (max-width: 649px) { 
  /* 移动端 */
  .site {
    flex-direction: column;
  }

  .site-header-mobile {
    display: flex;
    justify-content: center;
    align-items: center;
    justify-content: space-between;
  }

  .site-header-desktop {
    display: none;
  }

  .site-content {
    width: 100%;
    height: calc(100vh - 100px);
    padding-top: 100px;
  }

  .site-content.collapsed {
    width: 100%;
  }
}

@media (min-width: 650px) and (max-width: 1099px) {
  .site-header-desktop {
    height: calc(100vh - 200px);
    width: 200px;
    padding: 100px 20px; 
  }

  .site-content {
    width: calc(100% - 200px);
  }
}
</style>