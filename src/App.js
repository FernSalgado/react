import React from 'react';
import {BrowserRouter, Route, Switch, Link} from "react-router-dom";
import { 
  Container,
  AppBar,
  Toolbar,
  Typography,
  Card,
  CardContent,
  Button 
} from "@material-ui/core";


import {DetalhesPage} from "./pages/detalhes";
import {HomePage} from "./pages/home";
import {NaoEncontradoPage} from "./pages/naoEncontrado";
import './App.css';

function App(props) {
 
  return (
    <BrowserRouter>
      <AppBar position="sticky">
        <Toolbar>
          <Button color="inherit" component={Link} to="/">
            <Typography variant="h6">Home</Typography>
            </Button>
          <Button color="inherit" component={Link} to="/detalhes">
            <Typography variant="h6">Detalhes</Typography>
          </Button>
        </Toolbar>
      </AppBar>
      <Container>
        <Switch>
          <Route component={HomePage} exact path="/"></Route>
          <Route component={DetalhesPage} path="/detalhes"></Route>
          <Route component={NaoEncontradoPage}></Route>  
        </Switch>
      </Container>
    </BrowserRouter>
  );
}

export default App;
