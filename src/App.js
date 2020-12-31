import React, { useState } from 'react';
import data from './data';

const App = () => {
  const [count, setCount]=useState(0)
  const [text, setText]=useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    let amount = parseInt(count);

    const checkNumber = (num) => {
      if(num <= 0){
        return 1;
      }
      if(num > data.length){
        return data.length;
      }
      return num;
    } 

    setText(data.slice(0,checkNumber(amount)));
  }
  return (
    <section className="section-center">
      <h3>tired of boring lorem ipsum?</h3>
      <form onSubmit={ handleSubmit } className="lorem-form">
        <label htmlFor="amount">paragraphs:</label>
        <input 
          type="number" 
          name="amount" 
          id="amount" 
          value={ count } 
          onChange={ (e)=> setCount(e.target.value) } 
          maxLength={ data.length }
        />
        <button className="btn" type="submit">generate</button>
      </form>
      <article className="lorem-text">
        {
          text.map((item,index)=>(
            <p key={ index }>{ item }</p>
          ))
        }
      </article>
    </section>

  );
}

export default App;
