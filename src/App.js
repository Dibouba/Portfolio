import React from 'react';
import Contact from './pages/Contact';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import KnowLedges from './pages/KnowLedges';
import Portfolio from './pages/Portfolio';
import {BrowserRouter, Switch, Route} from 'react-router-dom'


const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/Competences" component={KnowLedges} />
          <Route path="/Contact" component={Contact} />
          <Route path="/Portfolio" component={Portfolio} />
          <Route  component={NotFound} />
        </Switch>
      </BrowserRouter>
      
    </div>
  );
};

export default App;
