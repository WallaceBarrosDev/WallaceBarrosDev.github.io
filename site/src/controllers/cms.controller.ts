import { cmsComponent } from "../components/cms.component";
import { cmsService } from "../services/cms.service";
import type { AllArticles, Article } from "../types";


export async function cmsController() {
    const allArticles: AllArticles = await cmsService()

    allArticles.map((article: Article) => {
        cmsComponent(article);
    })
}