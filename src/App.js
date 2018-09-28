import React, { Component } from 'react';
import Toolbar from '@components/toolbar';
import Preview from '@components/preview';
import store from '@utils/store';
import '@styles/App.less';

class App extends Component {
  state = {
    mode: '',
    modes: [],
    theme: '',
    themes: [],
    text: ''
  };

  onModeChange = mode => {
    const payload = { mode };
    this.setState(payload);
    this.storeSetting(payload);
  };

  onThemeChange = theme => {
    this.setState({ theme });
  };

  storeSetting = payload => {
    const { mode, theme } = this.state;
    store.set('setting', {
      mode,
      theme,
      ...payload
    });
  };

  componentDidMount() {
    const data = store.get('setting');
    if (!data) return;
    const { mode, theme } = data;
    this.setState({ mode, theme });
  }

  render() {
    const { mode, modes, theme, themes } = this.state;
    const barProps = { mode, modes, theme, themes };
    return (
      <div className="App">
        <Toolbar
          {...barProps}
          onModeChange={this.onModeChange}
          onThemeChange={this.onThemeChange}
        />
        <Preview />
      </div>
    );
  }
}

export default App;
