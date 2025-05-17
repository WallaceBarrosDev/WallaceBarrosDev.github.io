// @ts-ignore
import router from './router/router';
import './styles/global.css'
// @ts-ignore
import viteLogo from '/vite.svg'

window.addEventListener('popstate', router);

window.addEventListener('DOMContentLoaded', router);