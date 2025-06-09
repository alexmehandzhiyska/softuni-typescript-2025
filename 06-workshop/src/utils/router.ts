import type { Routes } from '../interfaces/Route'

export class Router {
    private routes: Routes;

    constructor(routes: Routes) {
        this.routes = routes;
        this.navigate(window.location.pathname);
    }

    navigate(path: string) {
        history.pushState({}, '', path);

        const templateFunc = this.routes[path];

        if (templateFunc) {
            templateFunc();
        }
    }
}
