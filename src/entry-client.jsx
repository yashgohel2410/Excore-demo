import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

const root = document.getElementById('root');
let renderMethod;

if (root && root.innerHTML !== '') {
  renderMethod = createRoot;
} else {
  renderMethod = createRoot;
}

renderMethod(root).render(<BrowserRouter><App /></BrowserRouter>);
