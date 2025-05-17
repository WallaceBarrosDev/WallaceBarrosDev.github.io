import { articleController } from "../controllers/article.controller";
import { homeController } from "../controllers/home.controller";
import { error404Controller } from "../controllers/error404.controller";

type TableRouter = {
    [key: string]: (param?: string) => void | Promise<void>;
}

const tableRouter: TableRouter = {
    '/': homeController,
    '/article': (title?: string) => articleController(title || '')
}

export default function router(): void{
    const path = window.location.pathname;

    if (path.startsWith('/article/')) {
        const title = path.split('/article/')[1];
        tableRouter['/article'](title);
        return;
    }

    const route = tableRouter[path] ? tableRouter[path] : error404Controller;
    route();
};