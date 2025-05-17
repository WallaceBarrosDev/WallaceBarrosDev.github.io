import type { AllArticles } from "../types";
import listArticlesComponent from "./listArticle.component";

export function homeComponent(articles: AllArticles) {
    const home = document.querySelector("#app") as HTMLDivElement;
    let articleComponent: string = '';

    articles.map((article) => {
        articleComponent += listArticlesComponent(article)
    });
    
    home.innerHTML = `
        ${articleComponent}
    `;
}