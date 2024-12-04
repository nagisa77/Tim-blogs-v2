<template>
  <div class="product-page">
    <div class="scroll-view">
      <div class="product-page-content">
        <!-- 显示加载状态 -->
        <div v-if="loading" class="loading">加载中...</div>
        <!-- 显示产品内容 -->
        <div v-else class="products-container">
          <div v-for="product in products" :key="product.title" class="product-item" @click="goToUrl(product.url)">
            <h3 class="product-title">{{ product.title }}</h3>
            <p class="product-describe">{{ product.describe }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductPage",
  data() {
    return {
      products: [], // 存储从 API 获取的产品数据
      loading: true, // 加载状态
    };
  },
  methods: {
    async fetchProducts() {
      try {
        // 调用 API 获取数据
        const response = await fetch("https://loadbloginfo-xg53l22czq-uc.a.run.app");
        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }
        const data = await response.json();
        this.products = data.products; // 提取产品数据
      } catch (error) {
        console.error("Error fetching products:", error);
        this.$message({
          message: "加载失败，请稍后再试",
          type: "error",
        });
      } finally {
        this.loading = false; // 加载完成
      }
    },
    goToUrl(url) {
      window.location.href = url; // 跳转到产品链接
    },
  },
  created() {
    this.fetchProducts(); // 组件创建时调用方法获取产品数据
  },
};
</script>

<style scoped>
.scroll-view {
  height: calc(100vh - 80px);
  overflow-y: auto;
  padding: 40px;
  box-shadow: inset 20px 0 20px -20px rgba(0, 0, 0, 0.8);
}

.product-item {
  border-radius: 14px;
  padding: 2px 13px;
  transition: transform 0.3s ease; /* 添加过渡效果 */
}

.product-title {
  font-size: 18px;
  margin-bottom: 3px;
}

.product-describe {
  font-size: 12px; /* 设置描述字号 */
}

.product-item:hover {
  background-color: var(--content-card-background-color);
  transform: scale(1.02); 
  text-decoration: underline;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
}

@media (max-width: 649px) {
  .scroll-view {
    height: calc(100vh - 200px);
    box-shadow: inset 0 20px 20px -20px rgba(0, 0, 0, 0.8);
  }
}

</style>
