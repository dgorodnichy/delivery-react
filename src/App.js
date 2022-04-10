import './App.css';
import Header from './Header.js'
import Products from './Products.js'
import React from 'react'

class App extends React.Component {
  // constructor(props) {
  //   super(props);
  // }

  componentDidMount() {

  }

  render() {
    return (
      <div className="App">
        <Header />
        <Products />
      </div>
    );
  }
}

export default App;
