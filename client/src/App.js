import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Characters from './components/Characters';
import CharacterDetail from './components/CharacterDetail';
import Spells from './components/Spells';
import Houses from './components/Houses';
import Home from './components/Home';
import HouseDetail from './components/HouseDetail';
import { Header } from './components/Header';

function App() {
  return (
    <div style={{ backgroundColor: 'black', color: 'white' }}>
      <BrowserRouter>
        <Header />
        <Route exact path="/" component={Home} />
        <Route path="/Houses" component={Houses} />
        <Route path="/Houses/:id" component={HouseDetail} />
        <Route path="/Spells" component={Spells} />
        <Route path="/Characters" component={Characters} />
        <Route path="/Characters/:id" component={CharacterDetail} />
      </BrowserRouter>
    </div>
  );
}

export default App;
