import type { AllArticles, AllArticlesData, Article } from "../types";

export function cmsService() {
    const query = `
        query {
            allArticles {
                title
                description
            }
        }
    `;

    const url = 'https://graphql.datocms.com/';
    const token = 'a07935654e3ef922b161074bf43d6f';

    const articles = async (): Promise<Array<Article>> => {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            },
            body: JSON.stringify({ query }),
        });        
        const allArticlesData: AllArticlesData = await response.json() ;
        return allArticlesData.data.allArticles;
    }

    return articles();
    // return allArticlesMoke();
}

function allArticlesMoke(): AllArticles {
    const article1: Article = {
        title: "Meu artigo 1",
        description: "# Meu artigo 1"
    }

    const article2: Article = {
        title: "Meu artigo 2",
        description: "# Meu artigo 2"
    }

    const article3: Article = {
        title: "Meu artigo 3",
        description: "# Meu artigo 3"
    }

    const article4: Article = {
        title: "Meu artigo 4",
        description: "# Meu artigo 4"
    }

    const article5: Article = {
        title: "Meu artigo 5",
        description: "# Meu artigo 5"
    }

    const article6: Article = {
        title: "Meu artigo 6",
        description: "# Meu artigo 6"
    }

    const article7: Article = {
        title: "Meu artigo 7",
        description: "# Meu artigo 7"
    }

    const article8: Article = {
        title: "Meu artigo 8",
        description: "# Meu artigo 8"
    }

    const article9: Article = {
        title: "Meu artigo 9",
        description: "# Meu artigo 9"
    }

    const article10: Article = {
        title: "Meu artigo 10",
        description: "# Meu artigo 10"
    }

    const article11: Article = {
        title: "Meu artigo 11",
        description: "# Meu artigo 11"
    }

    const article12: Article = {
        title: "Meu artigo 12",
        description: "# Meu artigo 12"
    }

    const article13: Article = {
        title: "Meu artigo 13",
        description: "# Meu artigo 13"
    }

    const article14: Article = {
        title: "Meu artigo 14",
        description: "# Meu artigo 14"
    }

    const article15: Article = {
        title: "Meu artigo 15",
        description: "# Meu artigo 15"
    }

    const article16: Article = {
        title: "Meu artigo 16",
        description: "# Meu artigo 16"
    }

    const article17: Article = {
        title: "Meu artigo 17",
        description: "# Meu artigo 17"
    }

    const article18: Article = {
        title: "Meu artigo 18",
        description: "# Meu artigo 18"
    }

    const article19: Article = {
        title: "Meu artigo 19",
        description: "# Meu artigo 19"
    }

    const article20: Article = {
        title: "Meu artigo 20",
        description: "# Meu artigo 20"
    }

    

    const allArticles: AllArticles = [
        article1, article2, article3, article4, article5,
        article6, article7, article8, article9, article10,
        article11, article12, article13, article14, article15,
        article16, article17, article18, article19, article20
    ];
    
    return allArticles
}