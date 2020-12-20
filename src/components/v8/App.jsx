
import React, { Component } from 'react'
import Counters from './components/Counters.jsx';
import Navbar from './components/Navbar.jsx';

export class App extends Component {
  state = {
    counters: [
        { id: 1, value: 4 },
        { id: 2, value: 0 },
        { id: 3, value: 0 },
        { id: 4, value: 0 },
    ]
  }

  handleDelete = (id) => {
      this.setState({
          counters: this.state.counters.filter(counter=> counter.id !== id)
      })        
  }

  handleReset = () => {
      const counters = this.state.counters.map(counter=> {
          counter.value = 0;
          return counter;
      })
      this.setState({ counters });
  }

  handleIncrement = (counter) => {
      const counters = [...this.state.counters];
      const index = counters.indexOf(counter);
      counters[index] = {... counter };
      counters[index].value++;
      this.setState({ counters });
  }

  render() {
    return (
      <>
        <Navbar 
          totalCounters={ this.state.counters.filter(c=> c.value > 0).length }
        />
        <main className="container">
          <Counters 
            counters={ this.state.counters }
            onReset={ this.handleReset }
            onIncrement={ this.handleIncrement }
            onDelete={ this.handleDelete }
          
          />
        </main>
      </>
    )
  }
}

export default App


