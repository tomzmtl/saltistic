import { Component } from 'preact';
import React from 'preact-compat';

export default class RadioSet extends Component {

  constructor(props) {
    super(props);
    this.state.value = props.values[0];
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.values.indexOf(this.state.value) === -1) {
      this.setState({ value: nextProps.values[0] });
    }
  }

  handleClick(e) {
    if ('onChange' in this.props) {
      this.props.onChange(e);
    }
    this.setState({ value: parseInt(e.target.value, 10) });
  }

  renderOptions() {
    return this.props.values.map(value => {
      const labelProps = {};

      if (this.state.value === value) {
        labelProps.className = 'selected';
      }

      const inputProps = {
        checked: this.props.checked === value,
        onClick: e => this.handleClick(e),
        type: 'radio',
        value,
      };

      return (
        <label {...labelProps}>
          <input { ...inputProps } />
          <span>{value}</span>
        </label>
      );
    });
  }

  render() {
    return (
      <div className="ui radioset">
        {this.renderOptions()}
      </div>
    );
  }
}
