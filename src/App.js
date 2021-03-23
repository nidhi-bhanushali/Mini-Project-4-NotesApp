import React , { useEffect } from 'react'
import Notes from './components/Notes';

function App() {
  useEffect(() => {
    <Notes/>
  }, [])

  return (
      <div>
      <Notes/>
      </div>
  );
}

export default App;
