<template>
  <div class="scroll-view-container">
    <div class="scroll-view">
      <div class="overlay"></div>
      <div class="multi-column-layout">
        <div class="content-container">
          <div class="masonry">
            <router-link
              v-for="(article, index) in articles"
              :key="index"
              :to="`/article/${article.metadata.slug}`" 
              class="masonry-item"
            >
              <img :src="article.metadata.imgUrl" :alt="'Placeholder Image ' + index" class="responsive-image" />
              <div style="padding: 18px;">
                <p class="content-card-text">{{ article.metadata.title || '未命名文章' }}</p>
                <span class="content-card-date">
                  <el-icon>
                    <Calendar />
                  </el-icon>
                  {{ article.metadata.date || '未知日期' }}                
                </span>
              </div>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { loadArticles } from '@/utils/articles-loader';

export default {
  name: 'HomePage',

  data() {
    return {
      articles: [], // 存储加载的文章数据
    };
  },
  
  created() {
    // 在组件加载时加载文章
    this.articles = loadArticles();
  },
}
</script>

<style scoped>
.overlay {
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 100px; 
  z-index: 10; /* 确保覆盖在 scroll-view 上 */
  background: linear-gradient(to bottom, transparent 20%, var(--content-background-color) 60%);
}

.scroll-view-container {
  position: relative;
}

.scroll-view {
  height: 100vh;
  overflow-y: auto;
}

.multi-column-layout {
  padding: 150px 30px;
}

.masonry {
  column-gap: 40px;
}

.masonry-item {
  margin-bottom: 40px;
  break-inside: avoid;
  background-color: var(--content-card-background-color);
  text-decoration: none; /* 取消下划线 */
  color: inherit; /* 继承父元素的颜色 */
  border-radius: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  display: block; /* 确保是块级元素以支持链接 */
}

.masonry-item:hover {
  transform: scale(1.05); /* 适度缩放 */
  transition: transform 0.3s ease-in-out;
}

.content-container {
  max-width: 800px;
  margin: 0 auto;
}

.responsive-image {
  width: 100%;
  display: block;
  border-radius: 20px 20px 0 0;
}

.title {
  text-align: center;
  font-size: 20px;
  font-family: 'Arial', sans-serif;
  font-weight: bold;
}

.content-card-text {
  color: var(--content-card-text-color);
  font-weight: bold;
}

.content-card-date {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 12px;
}

/* 响应式布局 */
@media (min-width: 900px) {
  .masonry {
    column-count: 3;
  }
}

@media (min-width: 650px) and (max-width: 899px) {
  .masonry {
    column-count: 2;
  }
}

@media (max-width: 649px) {
  .masonry {
    column-count: 1;
  }
}
</style>
