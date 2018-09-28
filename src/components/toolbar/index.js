import React, { Component } from 'react';
import { Row, Col } from 'antd';

import Export from '@components/export';
import SelectWithLabel from '@components/select-with-label';
import FontSetting from '@components/font-setting';
import StyleSetting from '@components/style-setting';
import ExportSetting from '@components/export-setting';
import './index.less';

class Toolbar extends Component {
  render() {
    const {
      mode,
      modes,
      theme,
      themes,
      onModeChange,
      onThemeChange
    } = this.props;

    const modeProps = {
      label: 'Mode',
      value: mode,
      options: modes,
      placeholder: '请选择语言',
      onChange: onModeChange
    };
    const themeProps = {
      label: 'Theme',
      value: theme,
      options: themes,
      placeholder: '请选择主题',
      onChange: onThemeChange
    };

    return (
      <div className="toolbar">
        <Row type="flex" justify="space-between">
          <Col span={6}>
            <SelectWithLabel {...modeProps} />
          </Col>
          <Col span={6}>
            <SelectWithLabel {...themeProps} />
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
