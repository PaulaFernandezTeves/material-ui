import './App.css';
import React from 'react';
import RenderizadoElementos from './components/RenderizadoElements';
import {EventosES6, EventosES7, MasSobreEventos} from './components/Eventos';
import ComunicationComponent from './components/ComunicationComponent';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <section>
          <RenderizadoElementos></RenderizadoElementos>
          <hr></hr>
          <EventosES6/>
          <hr></hr>
          <EventosES7/>
          <hr></hr>
          <MasSobreEventos/>
          <hr></hr>
          <ComunicationComponent/>
        </section>
      </header>
    </div>
  );
}

export default App;
