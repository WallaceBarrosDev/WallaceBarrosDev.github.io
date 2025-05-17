import { cmsService } from "../services/cms.service";
import type { Article } from "../types";
import articleComponent from "../components/article.component";

export async function articleController(title: string) {
    console.log("teste contorller = "+decodeURIComponent(title));

    const articles = await cmsService();

    const article = articles.find((article: Article) => {
        return article.title === decodeURIComponent(title);
    }) as Article | undefined;
    
    if (article) articleComponent(article);
}