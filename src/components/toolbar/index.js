import React, { Component } from 'react';

import Export from '@components/export';
import SelectWithLabel from '@components/select-with-label';
import ButtonWithPopover from '@components/button-with-popover';
import FontSetting from '@components/font-setting';
import StyleSetting from '@components/style-setting';
import ExportSetting from '@components/export-setting';
import './index.less';

class Toolbar extends Component {
  render() {
    const {
      language,
      languages,
      theme,
      themes,
      onThemeChange,
      onLanguageChange
    } = this.props;

    const languageProps = {
      label: 'Language',
      value: language,
      options: languages,
      placeholder: '请选择语言',
      onChange: onLanguageChange
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
        <SelectWithLabel {...languageProps} />
        <SelectWithLabel {...themeProps} />
        <ButtonWithPopover
          icon="icon-fontsize"
          title="字体设置"
          content={<FontSetting />}
        />
        <ButtonWithPopover
          icon="icon-padding"
          title="图片样式设置"
          content={<StyleSetting />}
        />
        <ButtonWithPopover
          icon="icon-setting"
          title="导出设置"
          content={<ExportSetting />}
        />
        <Export />
      </div>
    );
  }
}

export default Toolbar;
