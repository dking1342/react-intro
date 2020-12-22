
import React, { useState } from 'react';
import './App.css';

import Search from './components/Search';
import Results from './components/Results';
import Popup from './components/Popup';

function App() {

  const [input, setInput] = useState({
    search: '',
    results:[],
    selected:[],
  });

  const handleInput = (e) => {
    let search = e.target.value;

    setInput(prevInput => {
        return {...prevInput, search}
    })
  } 
  
  const search = async (e) => {
    let url = `http://www.omdbapi.com/?apikey=${ API_KEY }&s=${input.search}`;
    if(e.key === 'Enter'){
      const response = await fetch(url);
      const data = await response.json();
      let movies = data.Search;

      setInput(prevInput=>{
          return {...prevInput, search: '', results:movies}
      })
    }
  }

  const openPopup = async (id) => {
    let url = `http://www.omdbapi.com/?apikey=${ API_KEY }&i=${id}`;
    const response = await fetch(url);
    const data = await response.json();
    
    setInput(prevInput => {
      return {...prevInput, selected: data}
    })
  }

  const closePopup = () => {
    setInput(prevInput=>{
      return {...prevInput, selected:[] }
    })
  }


  return (
    <div className="App">
      <header>
        <h1>Movie Database</h1>
      </header>
      <main>
          <Search 
            handleInput={ handleInput }
            search={ search }
            input={ input }
          />
          <Results 
            results = { input.results }
            openPopup={ openPopup }
          />
          { (input.selected.length === 0) ? null : <Popup selected={ input.selected } closePopup={ closePopup } /> }

      </main>
    </div>
  );
}

export default App;
