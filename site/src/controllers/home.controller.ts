import { homeComponent } from "../components/home.component";
import { cmsService } from "../services/cms.service";
import type { AllArticles } from "../types";

export async function homeController() {
    const articles: AllArticles = await cmsService()
    
    homeComponent(articles);
}