// src/articleStorage.ts

// Definição da estrutura de um Artigo
interface Article {
  id?: number;
  titulo: string;
  conteudo: string;
  dataCriacao: Date;
}

// Função para abrir o banco de dados IndexedDB
const openDB = (): Promise<IDBDatabase> => {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open('artigosDB', 1);

    request.onerror = (event) => {
      console.error('Erro ao abrir o banco de dados', event);
      reject(event);
    };

    request.onsuccess = (event) => {
      console.log('Banco de dados aberto com sucesso');
      resolve((event.target as IDBOpenDBRequest).result as IDBDatabase);
    };

    // Criação da store de artigos
    request.onupgradeneeded = (event) => {
      const db = (event.target as IDBRequest).result;
      if (!db.objectStoreNames.contains('artigos')) {
        db.createObjectStore('artigos', { keyPath: 'id', autoIncrement: true });
      }
    };
  });
};

// Função para adicionar um artigo ao IndexedDB
export const addArticle = async (titulo: string, conteudo: string): Promise<void> => {
  const db = await openDB();
  const transaction = db.transaction('artigos', 'readwrite');
  const store = transaction.objectStore('artigos');

  const artigo: Article = {
    titulo,
    conteudo,
    dataCriacao: new Date(),
  };

  const request = store.add(artigo);

  return new Promise((resolve, reject) => {
    request.onsuccess = () => {
      console.log('Artigo adicionado com sucesso');
      resolve();
    };
    request.onerror = (event) => {
      console.error('Erro ao adicionar artigo', event);
      reject(event);
    };
  });
};

// Função para obter todos os artigos
export const getArticles = async (): Promise<Article[]> => {
  const db = await openDB();
  const transaction = db.transaction('artigos', 'readonly');
  const store = transaction.objectStore('artigos');
  const request = store.getAll(); // Recupera todos os artigos

  return new Promise((resolve, reject) => {
    request.onsuccess = (event) => {
      resolve(request.result as Article[]);
    };
    request.onerror = (event) => {
      console.error('Erro ao recuperar artigos', event);
      reject(event);
    };
  });
};