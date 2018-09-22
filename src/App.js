import React, { Component } from 'react';
import Toolbar from './components/toolbar';
import Preview from './components/preview';
import './styles/App.less';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Toolbar />
        <Preview />

        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
          <Button type="primary">Button</Button>
        </header> */}
      </div>
    );
  }
}

export default App;
