// @ts-ignore
import router from './router/router';
import './styles/global.css'
// @ts-ignore
import viteLogo from '/vite.svg'

const params = new URLSearchParams(window.location.search);
const path = params.get("redirect");

if (path) {
  history.replaceState(null, "", window.location.origin + path);
  router();
} else {
  window.addEventListener('DOMContentLoaded', router);
}

window.addEventListener('popstate', router);

document.querySelector("#h")!.innerHTML = `
  <h1>Wallace Barros Dev</h1>
`;

document.querySelector("#f")!.innerHTML= `
  <small>@Wallace Barros Dev</small>
`;