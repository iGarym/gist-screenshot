import React, { Component } from 'react';
import { Button, Popover } from 'antd';
import MyIcon from '../my-icon';

class FontSetting extends Component {
  render() {
    const content = <div>font-setting</div>;

    return (
      <div className="font-setting">
        <Popover content={content} trigger="click">
          <Button type="dashed">
            <MyIcon type="icon-fontsize" />
          </Button>
        </Popover>
      </div>
    );
  }
}

export default FontSetting;
