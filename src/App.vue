<template>
  <div class="site">
    <header
      class="site-header-desktop">
      <h1 class="header-text header-title">Tim's Blog</h1>
      <HeaderContent @route-clicked="closeMenu" />
    </header>
    <header
      class="site-header-mobile"
      :class="{ hidden: !isHeaderVisible }"> 
      <h1 class="header-text header-title-mobile">Tim's Blog</h1>
      <el-icon size="30" class="header-menu-icon" @click="toggleMenu">
        <Menu />
      </el-icon>
    </header>
    <div class="header-content-mobile" :class="{ 'menu-visible': menuVisible }">
      <HeaderContent @route-clicked="closeMenu" />
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
      lastScrollY: 0,  // 用于记录上一次的滚动位置
      isHeaderVisible: true, // 控制header的显示与隐藏
    };
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);  // 监听滚动事件
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll);  // 移除滚动事件监听
  },
  methods: {
    toggleMenu() {
      this.menuVisible = !this.menuVisible;
    },
    closeMenu() {
      this.menuVisible = false;
    },
    handleScroll() {
      const currentScrollY = window.scrollY;

      // 滚动到顶部时，header保持显示
      if (currentScrollY === 0) {
        this.isHeaderVisible = true;
        console.log('滚动到顶部，显示header');
      } else if (currentScrollY > this.lastScrollY) {
        // 向下滚动，隐藏header
        this.isHeaderVisible = false;
        console.log('向下滚动，隐藏header');
      } else if (currentScrollY < this.lastScrollY) {
        // 向上滚动，显示header
        this.isHeaderVisible = true;
        console.log('向上滚动，显示header');
      }

      // 更新最后的滚动位置
      this.lastScrollY = currentScrollY;
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