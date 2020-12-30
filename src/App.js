import React, { useState, useEffect} from 'react';
import data from './data';

import Header from './components/Header';
import Slides from './components/Slides';

function App() {
  const [people, setPeople]=useState(data);
  const [index, setIndex ]=useState(0);

  useEffect(()=>{
    if(index < 0){
      setIndex(people.length - 1);
    } else if(index > people.length - 1){
      setIndex(0);
    } else{
      setIndex(index);
    }
  },[index,people])

  useEffect(()=>{
    let slider = setInterval(()=>{
      setIndex(index + 1);
    }, 3000)
    return ()=>clearInterval(slider);
  },[index])

  return (
    <section className="section">
      <Header />
      <Slides 
        people={ people }
        index = { index }
        setIndex= { setIndex }
      />

    </section>

  );
}

export default App;
