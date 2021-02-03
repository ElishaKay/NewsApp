
export async function getAllArticles() {
    const response = await fetch('/api/articles');
    return await response.json();
}
