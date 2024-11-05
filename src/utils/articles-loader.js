const GITHUB_API_BASE = 'https://api.github.com';
const REPO_OWNER = 'nagisa77';
const REPO_NAME = 'blogs';
const ACCESS_TOKEN = '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';

// Function to load articles from GitHub
export async function loadArticles() {
  const fileList = await fetchFileList();
  const articles = await Promise.all(fileList.map(fetchFileContent));

  return articles.map(({ name, content }) => {
    const metadata = {};
    const metadataMatch = content.match(/\+\+\+([\s\S]*?)\+\+\+/);
    let contentWithoutMetadata = content;

    if (metadataMatch) {
      const metadataContent = metadataMatch[1].trim();
      metadataContent.split('\n').forEach(line => {
        const [key, value] = line.split('=');
        metadata[key.trim()] = value.trim();
      });
      metadata.slug = metadata.title ? metadata.title.trim().replace(/\s+/g, '-') : '';
      contentWithoutMetadata = content.replace(metadataMatch[0], '').trim();
    }

    if (!metadata.imgUrl) {
      const urlMatch = content.match(/https?:\/\/[^"\s]+\.(jpg|jpeg|png|gif)/);
      metadata.imgUrl = urlMatch ? urlMatch[0] : 'https://www.contentviewspro.com/wp-content/uploads/2017/07/default_image.png';
    }

    return {
      file: name,
      metadata,
      content: contentWithoutMetadata
    };
  });
}

// Fetch file list from GitHub repository
async function fetchFileList() {
  const url = `${GITHUB_API_BASE}/repos/${REPO_OWNER}/${REPO_NAME}/contents`;
  const response = await fetch(url, {
    headers: { Authorization: `Bearer ${ACCESS_TOKEN}` }
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch files: ${response.status} ${response.statusText}`);
  }

  const files = await response.json();
  console.log('Fetched files:', files);

  return files.filter(file => file.name.endsWith('.md'));
}

// Fetch individual file content from download URL
async function fetchFileContent(file) {
  const response = await fetch(file.download_url);
  const content = await response.text();
  return { name: file.name, content };
}
