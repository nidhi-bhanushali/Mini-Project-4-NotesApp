import React , { useEffect } from 'react'
import Notes from './components/Notes'

function App() {

  useEffect(() => {
    
    <Notes/>
  }, [])

  return (
    <div className="App">
      <Notes/>
    </div>
  );
}

export default App;
