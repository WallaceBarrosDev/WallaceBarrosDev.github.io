// @ts-ignore
import { cmsController } from './controllers/cms.controller';
import './styles/global.css'
// @ts-ignore
import viteLogo from '/vite.svg'


document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <main>
    <h1> Hello Word !!! </h1>
    <div id="#articles"></div>
  </main>
`;

cmsController();