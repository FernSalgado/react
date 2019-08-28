import React from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";

import './App.css';

import {DetalhesPage} from "./pages/detalhes";
import {HomePage} from "./pages/home";
import {NaoEncontradoPage} from "./pages/naoEncontrado";

function App(props) {
  return (
    <BrowserRouter>
      <Switch>
        <Route component={HomePage} exact path="/"></Route>
        <Route component={DetalhesPage} path="/detalhes"></Route>
        <Route component={NaoEncontradoPage}></Route>  
      </Switch>
    </BrowserRouter>
  );
}

export default App;
