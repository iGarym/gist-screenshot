import React, { Component } from 'react';
import { Row, Col } from 'antd';
import ThemeSelect from '../theme-select';
import ModeSelect from '../mode-select';
import FontSetting from '../font-setting';
import StyleSetting from '../style-setting';
import ExportSetting from '../export-setting';
import Export from '../export';
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
