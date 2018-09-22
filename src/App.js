import React, { Component } from 'react';
import Toolbar from '@components/toolbar';
import Preview from '@components/preview';
import '@styles/App.less';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Toolbar />
        <Preview />
      </div>
    );
  }
}

export default App;
