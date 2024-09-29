<template>
  <div class="scroll-view-container">
  <div class="scroll-view">
    <div class="overlay"></div> <!-- 新增蒙层 -->
    <div class="multi-column-layout">
      <div class="content-container">
        <div class="masonry">
          <div class="masonry-item" v-for="(image, index) in images" :key="index" :body-style="{ padding: '0px' }">
            <img :src="image.src" :alt="'Placeholder Image ' + index" class="responsive-image" />
            <div style="padding: 18px;">
              <p class="content-card-text">图片描述</p>
              <!-- date icon + date -->
              <span class="content-card-date">
                <el-icon>
                  <Calendar />
                </el-icon>
                2025-02-02
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
export default {
  name: 'HomePage',

  data() {
    return {
      images: [
        { 'src': 'https://via.placeholder.com/800x600' },
        { 'src': 'https://via.placeholder.com/250' },
        { 'src': 'https://via.placeholder.com/200' },
        { 'src': 'https://via.placeholder.com/250' },
        { 'src': 'https://via.placeholder.com/200' },
        { 'src': 'https://via.placeholder.com/150' },
      ],
    };
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
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.masonry-item:hover {
  transform: scale(1.1);
  transition: transform 0.3s ease-in-out;
}

.content-container {
  max-width: 800px;
  margin: 0 auto;
}

.responsive-image {
  width: 100%;
  display: block;
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
