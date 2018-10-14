import React, { Component } from 'react';
import MonacoEditor from 'react-monaco-editor';
import throttle from 'lodash.throttle';
import './index.less';

class IDE extends Component {
  state = {};

  ideRef = React.createRef();

  onChange = throttle(val => {
    this.props.onChange(val);
  }, 250);

  componentDidMount() {
    const { offsetWidth: width, offsetHeight: height } = this.ideRef.current;
    this.setState({
      width,
      height,
      hasMounted: true
    });
  }

  render() {
    const { width, height, hasMounted } = this.state;
    const { value, language = 'javascript', theme = 'vs-dark' } = this.props;
    const props = { value, width, height, language, theme };

    return (
      <div ref={this.ideRef} className="ide">
        {hasMounted && <MonacoEditor {...props} onChange={this.onChange} />}
      </div>
    );
  }
}

export default IDE;
