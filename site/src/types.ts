export type Article = {
    title: string;
    description: string;
}

export type AllArticlesData = {
    data: {
        allArticles: AllArticles;
    };
}

export type AllArticles = Array<Article>;