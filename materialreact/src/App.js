import React from 'react';
import {ThemeProvider} from '@material-ui/core/styles'
import theme from './temaConfig'
import Contenedor from './components/Contenedor';


function App() {
  return (
    <div>

      <ThemeProvider theme={theme}>
        <Contenedor></Contenedor>
      </ThemeProvider>

    </div>
  );
}

export default App;
