import { cmsComponent } from "../components/cms.component";
import { cmsService } from "../services/cms.service";
import type { Article } from "../types";

export async function cmsController() {
    const allArticles: Array<Article> = await cmsService()

    allArticles.map((article: Article) => {
        cmsComponent(article);
    })
}