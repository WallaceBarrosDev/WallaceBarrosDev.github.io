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

