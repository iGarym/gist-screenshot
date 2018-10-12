import React, { Component } from 'react';
import { Button, Popover } from 'antd';
import MyIcon from '@components/my-icon';

class ButtonWithPopover extends Component {
  render() {
    const { icon, title, content } = this.props;
    return (
      <div className="button-with-popover" title={title}>
        <Popover content={content} trigger="click">
          <Button type="dashed">
            <MyIcon type={icon} />
          </Button>
        </Popover>
      </div>
    );
  }
}

export default ButtonWithPopover;
