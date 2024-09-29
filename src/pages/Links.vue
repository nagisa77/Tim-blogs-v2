<template>
  <div class="links-page">
    <h1>我的联系方式</h1>

    <div class="links-container">
      <div v-for="link in links" :key="link.title" class="links-item">
        <img class="links-item-icon" :src="link.icon" :alt="link.title" />
        <a class="links-item-title" :href="link.url">{{ link.title }}</a>
      </div>

      <div class="links-item" @click="copyToClipboard('nagisa12321')">
        <img class="links-item-icon"
          src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWgcU1gDqq-tVWNh9se74lXiHt48_dTS9frg&s'
          alt="Wechat" />
        <a class="links-item-title">nagisa12321</a>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: 'LinksPage',

  methods: {
    copyToClipboard(title) {
      navigator.clipboard.writeText(title).then(() => {
        this.$message({
          message: '已复制到剪贴板',
          type: 'success'
        });
      });
    }
  },

  data() {
    return {
      links: [
        {
          title: 'nagisa77',
          icon: 'https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png',
          url: 'https://github.com/nagisa77',
        },

        {
          title: 'blog',
          icon: 'https://cdn1.iconfinder.com/data/icons/logotypes/32/blogger-1024.png',
          url: 'https://nagisa77.github.io',
        },

        {
          title: '猫仔布丁🍮',
          icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrLEt7CpnTRQ1va0on-RGO3aDsgpdlNFUoaw&s',
          url: "https://v.douyin.com/ihMExh2L/?utm_campaign=client_share&app=aweme&utm_medium=ios&tt_from=more&utm_source=more"
        },

        {
          title: 'jtchen78',
          icon: 'https://i.pinimg.com/474x/1e/d6/e0/1ed6e0a9e69176a5fdb7e090a1046b86.jpg',
          url: "https://www.instagram.com/jtchen78/"
        },
      ],
    };
  },
};
</script>

<style scoped>
.links-page {
  padding: 100px;

  color: var(--content-text-color);
}

.links-container {
  width: 50%;
  display: flex;
  flex-wrap: wrap;
  margin-top: 10px;
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

  transform: scale(1.10);
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
</style>
