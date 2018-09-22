import React, { Component } from 'react';
import { Row, Col } from 'antd';

import Export from '@components/export';
import ModeSelect from '@components/mode-select';
import ThemeSelect from '@components/theme-select';
import FontSetting from '@components/font-setting';
import StyleSetting from '@components/style-setting';
import ExportSetting from '@components/export-setting';
import './index.less';

class Toolbar extends Component {
  render() {
    return (
      <div className="toolbar">
        <Row type="flex" justify="space-between">
          <Col span={6}>
            <ThemeSelect />
          </Col>
          <Col span={6}>
            <ModeSelect />
          </Col>
          <Col span={3}>
            <FontSetting />
          </Col>
          <Col span={3}>
            <StyleSetting />
          </Col>
          <Col span={3}>
            <ExportSetting />
          </Col>
          <Col span={3}>
            <Export />
          </Col>
        </Row>
      </div>
    );
  }
}

export default Toolbar;
