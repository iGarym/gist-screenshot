import React, { Component } from 'react';
import Toolbar from '@components/toolbar';
import Preview from '@components/preview';
import store from '@utils/store';

class App extends Component {
  state = {
    language: 'javascript',
    languages: [
      { label: 'Bash', value: 'bash' },
      { label: 'Clojure', value: 'clojure' },
      { label: 'C++', value: 'cpp' },
      { label: 'C#', value: 'cs' },
      { label: 'CSS', value: 'css' },
      { label: 'Dart', value: 'dart' },
      { label: 'Diff', value: 'diff' },
      { label: 'Dockerfile', value: 'dockerfile' },
      { label: 'Dust', value: 'dust' },
      { label: 'Go', value: 'Go' },
      { label: 'Haskell', value: 'haskell' },
      { label: 'Java', value: 'java' },
      { label: 'JavaScript', value: 'javascript' },
      { label: 'JSON', value: 'json' },
      { label: 'Kotlin', value: 'kotlin' },
      { label: 'Less', value: 'less' },
      { label: 'Makefile', value: 'makefile' },
      { label: 'Markdown', value: 'markdown' },
      { label: 'Nginx', value: 'nginx' },
      { label: 'Objective-C', value: 'objectivec' },
      { label: 'PHP', value: 'php' },
      { label: 'Python', value: 'python' },
      { label: 'Rust', value: 'rust' },
      { label: 'SCSS', value: 'scss' },
      { label: 'Shell', value: 'shell' },
      { label: 'Stylus', value: 'stylus' },
      { label: 'Swift', value: 'swift' },
      { label: 'TypeScript', value: 'typescript' },
      { label: 'HTML', value: 'html' }
    ],
    theme: 'atom-one-dark',
    themes: [
      {
        label: 'Agate',
        value: 'agate'
      },
      {
        label: 'Android Studio',
        value: 'androidstudio'
      },
      {
        label: 'Arduino Light',
        value: 'arduino-light'
      },
      {
        label: 'Arta',
        value: 'arta'
      },
      {
        label: 'Atelier Cave Dark',
        value: 'atelier-cave-dark'
      },
      {
        label: 'Atelier Cave Light',
        value: 'atelier-cave-light'
      },
      {
        label: 'Atelier Dune Dark',
        value: 'atelier-dune-dark'
      },
      {
        label: 'Atelier Dune Light',
        value: 'atelier-dune-light'
      },
      {
        label: 'Atelier Estuary Dark',
        value: 'atelier-estuary-dark'
      },
      {
        label: 'Atelier Estuary Light',
        value: 'atelier-estuary-light'
      },
      {
        label: 'Atelier Forest Dark',
        value: 'atelier-forest-dark'
      },
      {
        label: 'Atelier Forest Light',
        value: 'atelier-forest-light'
      },
      {
        label: 'Atelier Heath Dark',
        value: 'atelier-heath-dark'
      },
      {
        label: 'Atelier Heath Light',
        value: 'atelier-heath-light'
      },
      {
        label: 'Atelier Lakeside Dark',
        value: 'atelier-lakeside-dark'
      },
      {
        label: 'Atelier Lakeside Light',
        value: 'atelier-lakeside-light'
      },
      {
        label: 'Atelier Plateau Dark',
        value: 'atelier-plateau-dark'
      },
      {
        label: 'Atelier Plateau Light',
        value: 'atelier-plateau-light'
      },
      {
        label: 'Atelier Savanna Dark',
        value: 'atelier-savanna-dark'
      },
      {
        label: 'Atelier Savanna Light',
        value: 'atelier-savanna-light'
      },
      {
        label: 'Atelier Seaside Dark',
        value: 'atelier-seaside-dark'
      },
      {
        label: 'Atelier Seaside Light',
        value: 'atelier-seaside-light'
      },
      {
        label: 'Atelier Sulphurpool Dark',
        value: 'atelier-sulphurpool-dark'
      },
      {
        label: 'Atelier Sulphurpool Light',
        value: 'atelier-sulphurpool-light'
      },
      {
        label: 'Atom One Dark',
        value: 'atom-one-dark'
      },
      {
        label: 'Atom One Light',
        value: 'atom-one-light'
      },
      {
        label: 'Foundation',
        value: 'foundation'
      },
      {
        label: 'Github Gist',
        value: 'github-gist'
      },
      {
        label: 'Github',
        value: 'github'
      },
      {
        label: 'Google Code',
        value: 'googlecode'
      },
      {
        label: 'Grayscale',
        value: 'grayscale'
      },
      {
        label: 'Gruvbox Dark',
        value: 'gruvbox-dark'
      },
      {
        label: 'Gruvbox Light',
        value: 'gruvbox-light'
      },
      {
        label: 'Hopscotch',
        value: 'hopscotch'
      },
      {
        label: 'Hybrid',
        value: 'hybrid'
      },
      {
        label: 'Idea',
        value: 'idea'
      },
      {
        label: 'Monokai Sublime',
        value: 'monokai-sublime'
      },
      {
        label: 'Monokai',
        value: 'monokai'
      },
      {
        label: 'Obsidian',
        value: 'obsidian'
      },
      {
        label: 'Ocean',
        value: 'ocean'
      },
      {
        label: 'Pojoaque',
        value: 'pojoaque'
      },
      {
        label: 'Purebasic',
        value: 'purebasic'
      },
      {
        label: 'Railscasts',
        value: 'railscasts'
      },
      {
        label: 'Rainbow',
        value: 'rainbow'
      },
      {
        label: 'Routeros',
        value: 'routeros'
      },
      {
        label: 'School Book',
        value: 'school-book'
      },
      {
        label: 'Solarized Dark',
        value: 'solarized-dark'
      },
      {
        label: 'Solarized Light',
        value: 'solarized-light'
      },
      {
        label: 'Sunburst',
        value: 'sunburst'
      },
      {
        label: 'Tomorrow Night Blue',
        value: 'tomorrow-night-blue'
      },
      {
        label: 'Tomorrow Night Bright',
        value: 'tomorrow-night-bright'
      },
      {
        label: 'Tomorrow Night Eighties',
        value: 'tomorrow-night-eighties'
      },
      {
        label: 'Tomorrow Night',
        value: 'tomorrow-night'
      },
      {
        label: 'Tomorrow',
        value: 'tomorrow'
      },
      {
        label: 'Vs',
        value: 'vs'
      },
      {
        label: 'Vs 2015',
        value: 'vs2015'
      },
      {
        label: 'Xcode',
        value: 'xcode'
      },
      {
        label: 'Zenburn',
        value: 'zenburn'
      }
    ],
    code: ''
  };

  onLanguageChange = language => {
    const payload = { language };
    this.setState(payload);
    this.storeSetting(payload);
  };

  onThemeChange = theme => {
    this.setState({ theme });
  };

  onCodeChange = code => {
    this.setState({ code });
  };

  storeSetting = payload => {
    const { language, theme } = this.state;
    store.set('setting', {
      theme,
      language,
      ...payload
    });
  };

  componentDidMount() {
    const data = store.get('setting');
    if (!data) return;
    const { language, theme } = data;
    this.setState({ language, theme });
  }

  render() {
    const { code, language, languages, theme, themes } = this.state;
    const { onLanguageChange, onThemeChange, onCodeChange } = this;
    const barProps = {
      theme,
      themes,
      language,
      languages,
      onThemeChange,
      onLanguageChange
    };
    const codeProps = {
      theme,
      language,
      value: code,
      onChange: onCodeChange
    };

    return (
      <div className="App">
        <Toolbar {...barProps} />
        <Preview {...codeProps} />
      </div>
    );
  }
}

export default App;
