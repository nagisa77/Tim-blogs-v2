export async function loadArticlesFromFirebase() {
  try {
    const response = await fetch('https://loadarticles-xg53l22czq-uc.a.run.app');
    if (!response.ok) {
      throw new Error("Failed to load articles");
    }
    const articles = await response.json();
    console.log("Fetched articles:", articles);
    return articles;
  } catch (error) {
    console.error("Error loading articles from Cloud Function:", error);
  }
}