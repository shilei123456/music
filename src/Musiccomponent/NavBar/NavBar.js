import React, { Component } from 'react';
import { Radio } from 'antd';
import './NavBar.css';

const RadioGroup = Radio.Group;

export default class NavBar extends Component {
onChange = e => {
  const { handleMultiple } = this.props;
  handleMultiple && handleMultiple(e.target.value);
};
render() {
  return (
    <div className="nav">
      <RadioGroup className="radioGroup" onChange={this.onChange} value={this.props.value}>
        <Radio value={1}>单选</Radio>
        <Radio value={2}>多选</Radio>
      </RadioGroup>
    </div>
  );
}
}
