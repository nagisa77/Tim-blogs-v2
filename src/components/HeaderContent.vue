<template>
  <div class="header-content">
    <TypingEffect class="header-text header-subtitle" :strings="strings" />
    <div class="header-text header-route">
      <li v-for="item in routes" :key="item.name" class="header-route-item">
        <router-link :to="item.path">{{ item.name }}</router-link>
      </li>
    </div>
  </div>
</template>

<script>
import TypingEffect from './TypingEffect.vue';

export default {
  components: {
    TypingEffect,
  },
  props: {
    strings: {
      type: Array,
      default: () => ['在离开之前，一切都是过程. ', '追求自由～ '],
    },
    routes: {
      type: Array,
      default: () => [
        { name: '首页', path: '/' },
        { name: '关于', path: '/about' },
        { name: '链接🔗', path: '/links' },
      ],
    },
  },
};
</script>

<style scoped>
.header-content {
  color: var(--header-text-color);
}
.header-route {
  padding-top: 80px;
  font-weight: normal;
  list-style-type: none;
  line-height: 2;
}
.header-route-item a {
  transition: font-weight 0.3s ease;
  text-decoration: none; /* 去掉下划线 */
  color: inherit; /* 继承父元素的字体颜色 */
}
.header-route-item a:hover {
  text-decoration: underline;
  color: var(--hover-color); /* 可选：悬停时更改颜色 */
}
</style>
