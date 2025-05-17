import { cmsService } from "../services/cms.service";
import type { Article } from "../types";

export async function cmsController() {
    // const articlesInterface = document.querySelector("#articles") as HTMLDivElement;
    const allArticles: Array<Article> = await cmsService()
    allArticles.map( (article: Article) => {
        console.log(
            `Titulo: ${article.title}\n`+
            `Descrição: ${article.description}`
        );
        
    })
}