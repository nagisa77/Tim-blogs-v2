<template> 
  <div class="site">
    <header class="site-header">
      <h1 class="header-text header-title">Tim's Blog</h1>
      <TypingEffect class="header-text header-subtitle" :strings="['在离开之前，一切都是过程. ', '追求自由～ ']"  />
      <div class="header-text header-route">
        <li class="header-route-item">
          <router-link to="/">首页</router-link>
        </li>
        <li class="header-route-item">
          <router-link to="/about">关于</router-link>
        </li>
        <li class="header-route-item" >
          <router-link to="/contact">链接🔗</router-link>
        </li>
      </div>
    </header>
    <div class="site-content">
    </div>
  </div>
</template>

<script>
import TypingEffect from './components/TypingEffect.vue';

export default {
  components: {
    TypingEffect,
  },
};
</script>

<style scoped>
.site {
  display: flex;
  width: 100%;
  height: 100%;
}

.site-header {
  height: 100vh;
  width: 300px;
  padding: 100px 60px;
  background-color: var(--header-background-color);
}

.site-content {
  height: 100vh;
  width: calc(100% - 300px);
  background-color: var(--content-background-color);
}

.header-text {
  color: var(--header-text-color);
}

.header-subtitle {
  padding-top: 30px;
  font-weight: normal;
}

.header-route {
  padding-top: 80px;
  font-weight: normal;
  list-style-type: none;
  line-height: 2;
}

.header-route-item {
  transition: font-weight 0.3s ease;
}

.header-route-item:hover {
  text-decoration: underline;
}

</style>