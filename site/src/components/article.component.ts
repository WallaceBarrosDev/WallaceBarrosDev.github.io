import { processMarkdownService } from "../services/processMarkdown.service";
import type { Article } from "../types";

export default function articleComponent(article: Article) {
    const app = document.querySelector("#app") as HTMLDivElement;

    app.innerHTML = `
        <article class="article">
            ${processMarkdownService(article.description)}
        </article>
    `
}