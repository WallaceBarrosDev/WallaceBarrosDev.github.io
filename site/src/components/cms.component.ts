import { processMarkdownService } from "../services/marked.service";
import type { Article } from "../types";

export function cmsComponent(article: Article) {
    const articlesInterface = document.querySelector("#articles") as HTMLDivElement;
    
    articlesInterface.innerHTML +=`
        <div class="articles">
            <h2>${article.title}</h2>
            <bd>
            <div>
                ${processMarkdownService(article.description)}
            </div>
        </div>
        `
}