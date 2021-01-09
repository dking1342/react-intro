import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// components
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Products from './pages/Products';
import Reports from './pages/Reports';

const App = () => {
  return (
    <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={ Home }/>
          <Route path='/reports'  component={ Reports }/>
          <Route path='/products'  component={ Products }/>
        </Switch>
    </Router>
  );
}

export default App;
