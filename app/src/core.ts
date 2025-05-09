import './global.style.css'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <main>
    <h1>Meu site</h1>
    <p>Site base</p>
    <div id="artigo"></div>
    <button id="salvar">Salvar</button>
    <button id="abrir">Abrir</button>
    <textarea id="editor" placeholder="Escreva markdown aqui..."></textarea>
    <div id="preview"></div>
    <br>
      <h1>Adicionar Artigo</h1>
    <form id="artigoForm">
      <input type="text" id="titulo" placeholder="Título" required />
      <textarea id="conteudo" placeholder="Conteúdo do artigo" required></textarea>
      <button type="submit">Salvar Artigo</button>
    </form>

    <h2>Artigos Salvos</h2>
    <ul id="artigosList"></ul>
    <br>
    <div id="conteudo"></div>
    <br>
    <br>
    <textarea id="editor" rows="10" cols="50">Escreva seu artigo aqui...</textarea>
    <br />
    <button id="salvar">Salvar</button>
    <button id="carregar">Carregar</button>
    <pre id="preview"></pre>
  </main>
`

// @ts-ignore
import MarkdownIt from 'markdown-it';
// import artigoMd from '/articles/artigo1.md?raw';

const md = new MarkdownIt();
const editor = document.getElementById('editor') as HTMLTextAreaElement;
const preview = document.getElementById('preview')!;
const btnSalvar = document.getElementById('salvar')!;
const btnAbrir = document.getElementById('abrir')!;

// Atualiza o preview em tempo real
editor.addEventListener('input', () => {
  preview.innerHTML = md.render(editor.value);
});

// Abrir um arquivo .md local
btnAbrir.addEventListener('click', async () => {
  // @ts-ignore
  const [fileHandle] = await window.showOpenFilePicker({
    types: [{
      description: 'Markdown Files',
      accept: { 'text/markdown': ['.md'] }
    }]
  });
  const file = await fileHandle.getFile();
  const content = await file.text();
  editor.value = content;
  preview.innerHTML = md.render(content);
});


// Salvar conteúdo no disco
btnSalvar.addEventListener('click', async () => {
  // @ts-ignore
  const newHandle = await window.showSaveFilePicker({
    suggestedName: 'novo.md',
    types: [{
      description: 'Markdown Files',
      accept: { 'text/markdown': ['.md'] }
    }]
  });
  const writable = await newHandle.createWritable();
  await writable.write(editor.value);
  await writable.close();
});

// src/index.ts
import { addArticle, getArticles } from './articleStorage';

// Função para carregar e exibir artigos
const loadArticles = async (): Promise<void> => {
  const artigos = await getArticles();
  const artigosList = document.getElementById('artigosList')!;
  artigosList.innerHTML = ''; // Limpa a lista atual

  artigos.forEach((artigo) => {
    const li = document.createElement('li');
    li.textContent = `${artigo.titulo} - ${artigo.dataCriacao.toLocaleString()}`;
    artigosList.appendChild(li);
  });
};

// Função para lidar com o formulário de adicionar artigo
const handleFormSubmit = async (event: Event): Promise<void> => {
  event.preventDefault();

  const titulo = (document.getElementById('titulo') as HTMLInputElement).value;
  const conteudo = (document.getElementById('conteudo') as HTMLTextAreaElement).value;

  await addArticle(titulo, conteudo); // Adiciona o artigo ao IndexedDB

  // Limpa o formulário
  (document.getElementById('titulo') as HTMLInputElement).value = '';
  (document.getElementById('conteudo') as HTMLTextAreaElement).value = '';

  loadArticles(); // Atualiza a lista de artigos
};

// Evento de submissão do formulário
document.getElementById('artigoForm')!.addEventListener('submit', handleFormSubmit);

// Carregar artigos quando a página for carregada
window.onload = loadArticles;


// src/index.ts
import { salvarArtigo, buscarArtigo } from './artigos';

const botaoSalvar = document.getElementById('salvar')!;
const botaoCarregar = document.getElementById('carregar')!;
const textarea = document.getElementById('editor') as HTMLTextAreaElement;
const visualizacao = document.getElementById('preview')!;

botaoSalvar.addEventListener('click', async () => {
  await salvarArtigo('meu-artigo', textarea.value);
  alert('Artigo salvo!');
});

botaoCarregar.addEventListener('click', async () => {
  const conteudo = await buscarArtigo('meu-artigo');
  visualizacao.innerText = conteudo ?? 'Nada encontrado';
});
