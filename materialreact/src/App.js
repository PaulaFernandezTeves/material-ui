import './App.css';
import React from 'react';
import RenderizadoElementos from './components/RenderizadoElements';
import {EventosES6, EventosES7, MasSobreEventos} from './components/Eventos';
import ComunicationComponent from './components/ComunicationComponent';
import CicloVida from './components/CicloVida';
import AjaxAPis from './components/AjaxApis';

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
          <hr></hr>
          <CicloVida></CicloVida>
          <hr></hr>
          <AjaxAPis></AjaxAPis>
        </section>
      </header>
    </div>
  );
}

export default App;
