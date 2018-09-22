import React, { Component } from 'react';
import { Select } from 'antd';

const Option = Select.Option;

class ThemeSelect extends Component {
  state = {
    value: '',
    options: []
  };

  onChange = value => {
    this.setState({ value });
  };

  render() {
    const { value, options } = this.state;
    return (
      <div className="theme-select">
        Theme：
        <Select
          defaultValue={value}
          placeholder="请选择主题"
          notFoundContent="暂无数据"
          onChange={this.onChange}
        >
          {options.map(item => (
            <Option value={item.id} key={item.id}>
              {item.label}
            </Option>
          ))}
        </Select>
      </div>
    );
  }
}

export default ThemeSelect;
