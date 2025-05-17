import { cmsComponent } from "../components/cms.component";
import { cmsService } from "../services/cms.service";
import type { AllArticles, Article } from "../types";


export async function cmsController() {
    // const allArticles: Array<Article> = await cmsService()

    allArticles().map((article: Article) => {
        cmsComponent(article);
    })
}

function allArticles(): AllArticles {
    const article1: Article = {
        title: "Meu artigo 1",
        description: "# Meu artigo 1"
    }

    const article2: Article = {
        title: "Meu artigo 2",
        description: "# meu artigo 2"
    }

    const allArticles: AllArticles =[
        article1, article2
    ];
    
    return allArticles
}