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
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  line-height: 1.5;
}

.markdown-content {
  background-color: #f5f5f5;
  padding: 20px;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}

::v-deep .markdown-content a {
  color: green;
}

::v-deep pre {
  background-color: white;
  border-radius: 10px;
}

::v-deep code {
  font-family: monospace;
  color: #d6336c;
  font-size: 15px;

  white-space: pre-wrap; 
  word-wrap: break-word; 
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
</style>
