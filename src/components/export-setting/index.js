import React, { Component } from 'react';
import { Popover, Button, Icon } from 'antd';

class ExportSetting extends Component {
  render() {
    const content = <div>export-setting</div>;
    return (
      <div className="export-setting">
        <Popover content={content} trigger="click">
          <Button type="dashed">
            <Icon type="setting" />
          </Button>
        </Popover>
      </div>
    );
  }
}

export default ExportSetting;
