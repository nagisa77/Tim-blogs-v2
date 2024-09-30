<template>
  <div class="markdown-container">
    <div class="scroll-view">
    <div v-html="compiledMarkdown" class="markdown-content"></div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
import { marked } from 'marked';
import { useRoute } from 'vue-router'; 
import { loadArticles } from '@/utils/articles-loader';

export default {
  name: 'ArticlePage',
  setup() {
    const compiledMarkdown = ref('');

    const route = useRoute();

    const articles = loadArticles();
    for (const article of articles) {
      if (article.metadata.slug === route.params.slug) {
        compiledMarkdown.value = marked(article.content);
      }
    }

    return {
      compiledMarkdown,
    };
  },
};
</script>

<style scoped>
.markdown-container {
  box-shadow: inset 20px 0 20px -20px rgba(0, 0, 0, 0.8);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  line-height: 2.0;
  color: var(--article-text-color);
}

.markdown-content {
  padding: 50px;
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
  overflow-y: auto;
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
