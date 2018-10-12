import React, { Component } from 'react';
import { Select } from 'antd';

const Option = Select.Option;

class SelectWithLabel extends Component {
  render() {
    const { value, label, placeholder, options, onChange } = this.props;
    const props = {
      onChange,
      placeholder,
      notFoundContent: '暂无数据'
    };

    if (value) {
      props.defaultValue = value;
    }

    return (
      <div className="select-with-label">
        {label}：
        <Select {...props}>
          {options.map(item => (
            <Option value={item.value} key={item.value} title={item.label}>
              {item.label}
            </Option>
          ))}
        </Select>
      </div>
    );
  }
}

export default SelectWithLabel;
