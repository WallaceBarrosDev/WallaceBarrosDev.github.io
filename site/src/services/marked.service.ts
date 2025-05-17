import { marked } from 'marked';

export function processMarkdownService(markdown: string): string {
    return marked(markdown) as string;
}