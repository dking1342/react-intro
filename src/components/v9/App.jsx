
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

  constructor(props){
    super(props);
    console.log('app contructor lifecycle hook');
  }

  componentDidMount(){
    // ajax call
    console.log('app did mount lifecycle hook');
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

  render() {
    console.log('app render lifecycle hook');
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
          
          />
        </main>
      </>
    )
  }
}

export default App


