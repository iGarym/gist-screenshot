import React, { Component } from 'react';
import { Button } from 'antd';

class Export extends Component {
  onClick = () => {
    console.log('export click');
  };

  render() {
    return (
      <div className="export">
        <Button type="primary" icon="cloud-download" onClick={this.onClick}>
          导出
        </Button>
      </div>
    );
  }
}

export default Export;
