import type { Article } from "../types";

export default function listArticlesComponent(article: Article) {
    return `
        <div class="articleComponent">
            <h2><a href="/article/${article.title}">${article.title}</a></h2>
        </div>
    `;
}