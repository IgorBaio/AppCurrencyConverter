import React from 'react';
import './App.css';

import Menu from './components/Menu'
function App() {
  return (
    <div className="App">
      <h1>Conversor de moedas</h1>
      <div className="linha">
        <Menu />
      </div>

    </div>
  );
}

export default App;
