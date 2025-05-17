export default function newHistoryService(path: string): void {
    if (path === window.location.pathname) return;
    window.history.pushState({}, '', path);
        
    const event = new PopStateEvent('popstate');
    window.dispatchEvent(event);
}