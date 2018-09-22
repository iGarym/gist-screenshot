import React, { Component } from 'react';
import { Popover, Button } from 'antd';
import MyIcon from '@components/my-icon';

class StyleSetting extends Component {
  render() {
    const content = <div>style-setting</div>;
    return (
      <div className="style-setting">
        <Popover content={content} trigger="click">
          <Button type="dashed">
            <MyIcon type="icon-padding" />
          </Button>
        </Popover>
      </div>
    );
  }
}

export default StyleSetting;
