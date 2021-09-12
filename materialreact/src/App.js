import './App.css';
import React from 'react';
import RenderizadoElementos from './components/RenderizadoElements';
import Eventos from './components/Eventos';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <section>
          <RenderizadoElementos></RenderizadoElementos>
          <hr></hr>
          <Eventos/>
        </section>
      </header>
    </div>
  );
}

export default App;
