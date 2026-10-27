import { useState } from 'react';
import { createRoot } from 'react-dom/client';

function App() {
  const [title, setTitle] = useState('Page A');
  return <>
    {title !== null && <title>{title}</title>}
    <h1>Title hoisting</h1>
    <p>Expected document.title: {title ?? 'Static shell title'}</p>
    <button onClick={() => alert(document.title)}>Read document.title</button>
    <button onClick={() => setTitle('Page B')}>Change title</button>
    <button onClick={() => setTitle(null)}>Remove title</button>
    <button onClick={() => setTitle('Page A')}>Restore title</button>
  </>;
}

createRoot(document.getElementById('root')).render(<App />);
