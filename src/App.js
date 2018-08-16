import React, { Component } from 'react';
import Header from './components/Header/Header'
import routes from './routes'

class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        {routes}
      </div>
    );
  }
}

export default App;
