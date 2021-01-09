import React from 'react';
import Board from './components/Board';
import Card from './components/Card';


const App = () => {
  return (
    <main className="flexbox">
      <Board id="board-one" className="board">
        <Card
          id="card-1"
          className="card"
          draggable="true"
        >
          <p>card one</p>
        </Card>
        <Card
          id="card-2"
          className="card"
          draggable="true"
        >
          <p>card two</p>
        </Card>
        <Card
          id="card-3"
          className="card"
          draggable="true"
        >
          <p>card three</p>
        </Card>
      </Board>

      <Board id="board-two" className="board">
        <Card
          id="card-2"
          className="card"
          draggable="true"
        >
          <p>card two</p>
        </Card>
      </Board>
    </main>
  );
}

export default App;
