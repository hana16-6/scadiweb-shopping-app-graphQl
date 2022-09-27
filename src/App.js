import React, { Component } from 'react'
import './App.css';
import './css/loading.css'
import Index from './routes/Index';

class App extends Component {
  componentDidMount() {
    window.onload = function () {
      document.body.classList.remove('load');
    };
  }

  render() {
    return (
      <Index client={this.props.client} />
    )
  }
}

export default App;
