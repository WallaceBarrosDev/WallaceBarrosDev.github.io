export function error404Component() {
    const app = document.querySelector('#app') as HTMLDivElement;

    app.innerHTML = `
        <div id="error404">
            <h1>404</h1>
            <h2>Página não encontrada</h2>
            <p>A página que você está procurando não existe ou foi removida.</p>
            <a href="/">Voltar para a página inicial</a>
        </div>
    `;
}