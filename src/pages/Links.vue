<template>
  <div class="links-page">
    <div class="links-content-container">
      <h1>我的联系方式 🔗</h1>
      <!-- 如果加载中，显示 loading 标志 -->
      <div v-if="loading" class="loading-icon">
        <l-tail-chase size="40" speed="1.75" color="black"></l-tail-chase>
      </div>
      <!-- 如果加载完成，显示 links -->
      <div v-else class="links-container">
        <div v-for="link in links" :key="link.title" class="links-item">
          <img class="links-item-icon" :src="link.icon" :alt="link.title" />
          <a class="links-item-title" :href="link.url" target="_blank">{{ link.title }}</a>
        </div>

        <div class="links-item" @click="copyToClipboard('nagisa12321')">
          <img class="links-item-icon"
            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWgcU1gDqq-tVWNh9se74lXiHt48_dTS9frg&s'
            alt="Wechat" />
          <a class="links-item-title">nagisa12321</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "LinksPage",
  data() {
    return {
      links: [], // 动态获取的 links 数据
      loading: true, // 加载状态
    };
  },
  methods: {
    async fetchLinks() {
      try {
        const response = await fetch("https://loadbloginfo-xg53l22czq-uc.a.run.app");
        if (!response.ok) {
          throw new Error("Failed to fetch links");
        }
        const data = await response.json();
        this.links = data.links;
      } catch (error) {
        console.error("Error fetching links:", error);
        this.$message({
          message: "加载失败，请稍后再试",
          type: "error",
        });
      } finally {
        this.loading = false;
      }
    },
    copyToClipboard(title) {
      navigator.clipboard.writeText(title).then(() => {
        this.$message({
          message: "已复制到剪贴板",
          type: "success",
        });
      });
    },
  },
  created() {
    this.fetchLinks(); // 在组件创建时加载数据
  },
};
</script>

<style scoped>
.links-page {
  padding: 60px;
  height: 100%;
  color: var(--content-text-color);
  background-color: var(--header-background-color);
}

.links-content-container {
  background-color: var(--content-background-color);
  padding: 40px 80px;
  border-radius: 45px;
  box-shadow: inset 0 0 20px rgba(0, 0, 0, 0.8);
}

.links-container {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  margin-top: 10px;
  margin-bottom: 30px;
}

.links-item {
  margin-top: 12px;
  margin-right: 15px;
  height: 40px;
  display: flex;
  align-items: center;
  background-color: var(--content-card-background-color);
  border-radius: 25px;
}

.links-item:hover {
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
  transform: scale(1.1);
  transition: transform 0.3s ease;
}

.links-item-title {
  font-size: 12px;
  padding-right: 15px;
  padding-left: 8px;
  text-decoration: none;
  /* 取消a标签下划线 */
  color: inherit;
  /* 继承父元素的字体颜色 */
}

.links-item-title:hover {
  font-weight: bold;
  text-decoration: underline;
}

.links-item-icon {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  padding: 5px;
}

@media (max-width: 649px) {
  .links-content-container {
    padding: 20px 40px;
  }

  .links-page {
    padding: 20px;
  }
}


</style>
