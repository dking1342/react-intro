
import React, { Component } from 'react'
import Counters from './components/Counters.jsx';
import Navbar from './components/Navbar.jsx';

export class App extends Component {
  state = {
    counters: [
        { id: 1, item: 'Shirt', value: 4 },
        { id: 2, item: 'Pants', value: 0 },
        { id: 3, item: 'Shoes', value: 0 },
        { id: 4, item: 'Socks', value: 0 },
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

  handleDecrement = (counter) => {
      const counters = [...this.state.counters];
      const index = counters.indexOf(counter);
      counters[index] = {... counter };
      (counters[index].value - 1 < 0) ? counters[index].value = 0 : counters[index].value--;
      this.setState({ counters });
  }

  handleSortAsc = () => {
    let counters = [...this.state.counters];
    counters = counters.sort((a,b) =>  (a.item > b.item) ? 1 : -1)
    this.setState({ counters })
  }

  handleSortDes = () => {
    let counters = [...this.state.counters];
    counters = counters.sort((a,b) =>  (a.item > b.item) ? -1 : 1)
    this.setState({ counters })
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
            onDecrement={ this.handleDecrement }
            onIncrement={ this.handleIncrement }
            onDelete={ this.handleDelete }
            onSortAsc={ this.handleSortAsc }
            onSortDes={ this.handleSortDes }
            
          />
        </main>
      </>
    )
  }
}

export default App


