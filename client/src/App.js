import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import { Characters } from './components/Characters';
import CharacterDetail from './components/CharacterDetail';
import Spells from './components/Spells';
import Houses from './components/Houses';
import Home from './components/Home';
import HouseDetail from './components/HouseDetail';
import SpellDetail from './components/SpellDetail';
import { Header } from './components/Header';
import './components/styles/index.css';
import { AppContent, TwoContainer } from './components/styles/appStyle';

function App() {
  return (
    <div>
      <p style={{ display: 'none' }}>APP Harry Potter</p>
      <BrowserRouter>
        <Header />
        <AppContent>
          <Route exact path="/" component={Home} />
          <Route path="/Houses" component={Houses} />
          <Route path="/Houses/:id" component={HouseDetail} />
          <TwoContainer>
            <Route path="/Spells" component={Spells} />
            <Route path="/Spells/:id" component={SpellDetail} />
          </TwoContainer>
          <TwoContainer>
            <Route path="/Characters" component={Characters} />
            <Route path="/Characters/:id" component={CharacterDetail} />
          </TwoContainer>
        </AppContent>
      </BrowserRouter>
    </div>
  );
}

export default App;
