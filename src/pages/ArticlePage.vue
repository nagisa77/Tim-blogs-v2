<template>
  <div class="markdown-container">
    <div class="scroll-view">
      <div v-if="loading" class="loading-icon">
        <l-tail-chase size="40" speed="1.75" color="black"></l-tail-chase>
      </div>
      <div v-else v-html="compiledMarkdown" class="markdown-content"></div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import { marked } from 'marked';
import { useRoute } from 'vue-router'; 
import { loadArticlesFromFirebase } from '@/utils/articles-loader';
import { tailChase } from 'ldrs'

tailChase.register()

export default {
  name: 'ArticlePage',
  setup() {
    const compiledMarkdown = ref('');
    const loading = ref(true); // 控制加载状态
    const route = useRoute();

    onMounted(async () => {
      const articles = await loadArticlesFromFirebase(); // 等待加载文章
      for (const article of articles) {
        if (article.metadata.slug === route.params.slug) {
          compiledMarkdown.value = marked(article.content);
          break; // 找到后可以退出循环
        }
      }
      loading.value = false; // 加载完成
    });

    return {
      compiledMarkdown,
      loading,
    };
  },
};
</script>

<style scoped>
.markdown-container {
  box-shadow: inset 20px 0 20px -20px rgba(0, 0, 0, 0.8);
  height: 100%;
  line-height: 2.0;
}

.markdown-content {
  padding: 50px;
}

.loading-container {
  text-align: center;
  font-size: 18px;
  color: var(--article-text-color);
  padding: 50px 0;
}

::v-deep .markdown-content a {
  color: var(--article-link-color);
}

::v-deep code {
  font-family: monospace;
  color: var(--article-code-text-color);
  font-size: 15px;
  white-space: pre-wrap; 
  word-wrap: break-word; 
}

::v-deep pre {
  background-color: var(--article-code-background-color);
  border-radius: 10px;
  padding: 10px;
}

.scroll-view {
  height: 100vh;
  width: 100%;
  overflow-y: auto;
}

.loading-icon {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

::v-deep img {
  margin: 30px auto;
  width: 100%;
  max-width: 800px;
  display: flex;
  justify-content: center;
  border-radius: 15px;
  box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.1);
}

@media (max-width: 649px) {
  .markdown-container {    
    box-shadow: inset 0 20px 20px -20px rgba(0, 0, 0, 0.8);
  }
}
</style>
