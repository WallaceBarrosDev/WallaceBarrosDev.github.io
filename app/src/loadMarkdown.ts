// src/loadMarkdown.ts
export const loadMarkdownFile = async (filePath: string): Promise<string> => {
  const url = `https://raw.githubusercontent.com/SEU_USUARIO/SEU_REPOSITORIO/main/articles/${filePath}`;
  
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Erro ao carregar o arquivo');
    }
    const text = await response.text();
    return text;
  } catch (error) {
    console.error('Erro ao carregar markdown:', error);
    throw error;
  }
};
