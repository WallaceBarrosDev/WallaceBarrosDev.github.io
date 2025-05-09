import { openDB } from './db';

export interface Artigo {
  id: string;
  conteudo: string;
}

const STORE_NAME = 'artigos';

export async function salvarArtigo(id: string, conteudo: string): Promise<void> {
  try {
    const db = await openDB();
    const tx = db.transaction(STORE_NAME, 'readwrite');
    const store = tx.objectStore(STORE_NAME);
    const artigo: Artigo = { id, conteudo };
    store.put(artigo);
    
  } catch (error) {
    console.error('Erro ao salvar artigo:', error);
    throw error;
  }
}

export async function buscarArtigo(id: string): Promise<string | null> {
  try {
    const db = await openDB();
    const tx = db.transaction(STORE_NAME, 'readonly');
    const store = tx.objectStore(STORE_NAME);

    return new Promise((resolve, reject) => {
      const request = store.get(id);
      request.onsuccess = () => {
        resolve(request.result?.conteudo || null);
      };
      request.onerror = () => {
        console.error('Erro ao buscar artigo:', request.error);
        reject(request.error);
      };
    });
  } catch (error) {
    console.error('Erro ao acessar o banco:', error);
    return null;
  }
}
