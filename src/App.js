
import React, { useState, useEffect } from 'react';
import dotenv from 'dotenv';
import './App.css';

// components
import Recipe from './components/Recipe';




dotenv.config();

const App = () => {
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('chicken');
  
  useEffect(()=>{
    // setRecipes([{id:1,recipe:'hot dog'},{id:2,recipe:'chicken'},{id:3,recipe:'steaks'}])
    getRecipes();
  },[query]);
  
  let url = `https://api.edamam.com/search?q=${query}&app_id=${process.env.REACT_APP_ID}&app_key=${process.env.REACT_APP_KEY}`;
  const getRecipes = async () => {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    setRecipes(data.hits);
  }

  const searchHandler =(e)=>{
    setSearch(e.target.value);
  }

  const getSearch = (e)=>{
    e.preventDefault();
    setQuery(search);
    setSearch('');
  }


  return(
    <div className="App">
      <form onSubmit={ getSearch } className="search-form">
        <input value={ search } onChange={ searchHandler } type="text" name="" id="" className="search-bar"/>
        <button type="submit" className="search-btn">Search</button>
      </form>
      {
        recipes.map(recipe=>(
          <Recipe 
            key={recipe.recipe.label}
            title={recipe.recipe.label}
            calories={recipe.recipe.calories}
            img={recipe.recipe.image}
            ingredients={recipe.recipe.ingredients}
          />
        ))

      }

    </div>
  )
}

export default App;
