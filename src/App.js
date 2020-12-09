
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// custom components
import Nav from './components/Nav';
import About from './components/About';
import Shop from './components/Shop';
import Home from './components/Home';
import ItemDetail from './components/ItemDetail';

const App = () => {

    return(
        <Router>
            <div className='App'>
                <Nav />
                <Switch>
                    <Route path='/' exact component={ Home } />
                    <Route path='/about' component={ About } />
                    <Route path='/shop' exact component={ Shop } />
                    <Route path='/shop/:id'  component={ ItemDetail } />
                </Switch>
            </div>
        </Router>
    );
}


export default App;