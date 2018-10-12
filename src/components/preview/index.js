import React, { Component } from 'react';
import Controls from '@components/controls';
import IDE from '@components/ide';
import './index.less';

class Preview extends Component {
  render() {
    return (
      <div className="preview">
        <div className="container">
          <Controls />
          <IDE />
        </div>
      </div>
    );
  }
}

export default Preview;
