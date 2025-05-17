import { cmsController } from "../controllers/cms.controller";
import { error404Controller } from "../controllers/error404.controller";

type TableRouter = {
    [key: string]: () => void;
}

const tableRouter: TableRouter = {
    '/': cmsController,
}

export default function router(): void{
    const path = window.location.pathname;
    const route = tableRouter[path] ? tableRouter[path] : error404Controller;
    route();
};