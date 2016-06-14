import { Component } from 'preact';
import React from 'preact-compat';
import { int } from '../utils';

export default class Dropdown extends Component {

  handleChange(e) {
    this.setState({ value: int(e.target.value) });
  }

  renderOptions() {
    return this.props.optns.map(opt => {
      const props = {
        selected: opt.value === this.state.value,
      };
      return <option value={opt.value} {...props}>{opt.label}</option>;
    });
  }

  renderFirstOption() {
    if ('initial' in this.props && this.props.initial === false) {
      return null;
    }
    return <option value="" disabled selected>Choose...</option>;
  }

  render(props) {
    return (
      <select className="ui dropdown" {...props} onChange={e => this.handleChange(e)}>
        {this.renderFirstOption()}
        {this.renderOptions()}
      </select>
    );
  }
}
