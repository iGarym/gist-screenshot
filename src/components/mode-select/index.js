import React, { Component } from 'react';
import { Select } from 'antd';

const Option = Select.Option;

class ModeSelect extends Component {
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
      <div className="mode-select">
        Mode：
        <Select
          defaultValue={value}
          placeholder="请选择语言"
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

export default ModeSelect;
