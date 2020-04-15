import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Characters from './components/Characters';
import CharacterDetail from './components/CharacterDetail';
import Spells from './components/Spells';
import Houses from './components/Houses';
import Home from './components/Home';
import HouseDetail from './components/HouseDetail';

function App() {
  return (
    <div>
      <BrowserRouter>
        <div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/Houses">Houses</Link>
            </li>
            <li>
              <Link to="/Characters">Characters</Link>
            </li>
            <li>
              <Link to="/Spells">Spells</Link>
            </li>
          </ul>
        </div>
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
