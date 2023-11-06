import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Welcome from './welcome';
import Main from './Main';
import Opciones from './Opciones'; 
import Manuales from './Manuales'; 
import Descargas from './Descargas'; 

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Welcome} />
          <Route path="/main" component={Main} />
          <Route path="/menu" component={Opciones} />
          <Route path="/manuales" component={Manuales} />
          <Route path="/descargas" component={Descargas} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
