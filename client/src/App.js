
// react imports
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

// custom components
import Navbar from './components/Navbar';
import { ExerciseList } from './components/ExerciseList';
import { EditExercise } from './components/EditExercise';
import { CreateExercise } from './components/CreateExercise';
import { CreateUser } from './components/CreateUser';


const App = () => {
  return (
    <Router>
      <div className="container">
        <Navbar />
        <br></br>
        <Route path='/' exact component={ ExerciseList } />
        <Route path='/edit/:id' component={ EditExercise } />
        <Route path='/create' component={ CreateExercise } />
        <Route path='/users' component={ CreateUser } />
      </div>
    </Router>
  );
}

export default App;
