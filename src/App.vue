<template>
  <div class="site">
    <header class="site-header-desktop">
      <h1 class="header-text header-title">Tim's Blog</h1>
      <HeaderContent />
    </header>
    <header class="site-header-mobile"> 
      <h1 class="header-text header-title-mobile">Tim's Blog</h1>
      <el-icon size="30" class="header-menu-icon" @click="toggleMenu">
        <Menu />
      </el-icon>
    </header>
    <div class="header-content-mobile" :class="{ 'menu-visible': menuVisible }">
      <HeaderContent />
    </div>
    <div class="site-content">
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
      menuVisible: false,
    };
  },
  methods: {
    toggleMenu() {
      this.menuVisible = !this.menuVisible;
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

.site-header-desktop {
  height: calc(100vh - 200px);
  width: 300px;
  padding: 100px 60px;
  background-color: var(--header-background-color);
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
}

.site-content {
  height: 100vh;
  width: calc(100% - 300px);
  background-color: var(--content-background-color);
}

.header-text {
  color: var(--header-text-color);
}

@media (max-width: 849px) { 
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
  }
}

@media (min-width: 850px) and (max-width: 1099px) {
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
