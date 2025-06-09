export class HtmlRenderer {
    static render(template: string) {
        const appDivEl = document.getElementById('app');

        if (appDivEl) {
            appDivEl.innerHTML = template;
        }
    }
}