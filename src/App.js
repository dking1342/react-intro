import React, { useState } from 'react';
import data from './questions';
import Question from './components/Question';


function App() {
  const [questions, setQuestions]=useState(data);
  return (
    <main className="container">
      <h3>questions and answers about login</h3>
      <section className="info">
        {
          questions.map(question=>(
            <Question 
              key={question.id }
              question={ question }
            />
          ))
        }
      </section>
    </main>
  );
}

export default App;
