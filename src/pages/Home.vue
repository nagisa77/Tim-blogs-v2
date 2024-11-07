<template>
  <div class="scroll-view-container">
    <div class="scroll-view">
      <div class="overlay"></div>
      <div class="multi-column-layout">
        <div class="content-container">
          <!-- 加载中提示 -->
          <div v-if="loading" class="loading-icon">
            <l-tail-chase size="40" speed="1.75" color="black"></l-tail-chase>
          </div>
          <!-- 文章内容 -->
          <div v-else class="masonry">
            <router-link
              v-for="(article, index) in articles"
              :key="index"
              :to="`/article/${article.metadata.slug}`" 
              class="masonry-item"
            >
              <!-- 仅当 imgUrl 存在且不为空字符串时显示图像 -->
              <img v-if="article.metadata.imgUrl && article.metadata.imgUrl.trim() !== ''" :src="article.metadata.imgUrl" :alt="'Placeholder Image ' + index" class="responsive-image" />
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
import { loadArticlesFromFirebase } from '@/utils/articles-loader';
import { tailChase } from 'ldrs'

tailChase.register()

export default {
  name: 'HomePage',

  data() {
    return {
      articles: [], // 存储加载的文章数据
      loading: true, // 控制加载状态
    };
  },
  
  async created() {
    this.loading = true; // 设置加载状态
    try {
      this.articles = await loadArticlesFromFirebase();
    } finally {
      this.loading = false; // 加载完成后关闭加载状态
    }
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
  box-shadow: inset 20px 0 20px -20px rgba(0, 0, 0, 0.8);
}

.scroll-view {
  height: 100vh;
  overflow-y: auto;
}

.multi-column-layout {
  padding: 150px 50px;
}

.loading-container {
  text-align: center;
  font-size: 18px;
  color: var(--content-card-text-color);
  padding: 50px 0;
}

.masonry {
  column-gap: 20px;
}

.masonry-item {
  margin-bottom: 20px;
  break-inside: avoid;
  background-color: var(--content-card-background-color);
  text-decoration: none;
  color: inherit;
  border-radius: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  display: block;
}

.masonry-item:hover {
  transform: scale(1.05);
  transition: transform 0.3s ease-in-out;
}

.content-container {
  max-width: 800px;
  margin: 0 auto;
}

.loading-icon {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
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

@media (max-width: 649px) {
  .multi-column-layout {
    padding: 50px 30px;
  }

  .scroll-view {
    height: calc(100vh - 100px);
  }

  .scroll-view-container {
    box-shadow: inset 0 20px 20px -20px rgba(0, 0, 0, 0.8);
  }
}

@media (min-width: 541px) and (max-width: 899px) {
  .masonry {
    column-count: 2;
  }
}

@media (max-width: 540px) {
  .masonry {
    column-count: 1;
  }
}
</style>
