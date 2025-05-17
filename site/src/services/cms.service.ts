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

    // return articles();
    return allArticlesMoke();
}

function allArticlesMoke(): AllArticles {
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