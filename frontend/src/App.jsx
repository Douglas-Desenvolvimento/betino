
import './App.css'
import { useEffect, useState } from 'react';
import { getSportsData } from './services/TestGet';

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    getSportsData().then(setData);
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Assistente de Apostas</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}

export default App
