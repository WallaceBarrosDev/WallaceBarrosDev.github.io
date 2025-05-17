export function homeComponent() {
    const home = document.querySelector("#app") as HTMLDivElement;
    
    home.innerHTML = `
        <header>
            <h1>Wallace Barros Dev</h1>
        </header>
    `;
}