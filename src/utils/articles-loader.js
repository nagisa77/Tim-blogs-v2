// load articles function
export function loadArticles() {
  const articles = require.context('@/assets/articles', false, /\.md$/);
  const fileList = articles.keys().map(file => file.replace('./', ''));

  const articleData = fileList.map(file => {
    const content = articles(`./${file}`).default;
    const metadata = {};
    const metadataMatch = content.match(/\+\+\+([\s\S]*?)\+\+\+/);

    let contentWithoutMetadata = content;

    if (metadataMatch) {
      const metadataContent = metadataMatch[1].trim();
      metadataContent.split('\n').forEach(line => {
        const [key, value] = line.split('=');
        metadata[key.trim()] = value.trim();
      });
      metadata.slug = metadata.title.trim().replace(/\s+/g, '-');
      contentWithoutMetadata = content.replace(metadataMatch[0], '').trim();
    }

    if (!metadata.imgUrl) {
      // eslint-disable-next-line no-useless-escape
      const urlMatch = content.match(/https?:\/\/[^"\s]+\.(jpg|jpeg|png|gif)/);
      if (urlMatch) {
        metadata.imgUrl = urlMatch[0]; // 获取第一个匹配的图片URL
      } else {
        metadata.imgUrl = 'https://www.contentviewspro.com/wp-content/uploads/2017/07/default_image.png'
      }
    }

    return {
      file,
      metadata,
      content: contentWithoutMetadata 
    };
  });

  return articleData;
}
